import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { Logger, ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule);

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Ritminho API')
    .setDescription('API para acompanhamento da rotina de bebês: sono, alimentação, humor, fraldas e atividades.')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
      },
      'access-token',
    )
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('docs', app, swaggerDocument);

  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        clientId: 'ritminho-api',
        brokers: [process.env.KAFKA_BROKER || 'localhost:9092'],
      },
      consumer: {
        groupId: 'ritminho-api-consumer',
      },
    },
  });

  app.enableCors({
    origin: true,
    credentials:true
  })

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  try {
    await app.startAllMicroservices();
  } catch (error) {
    logger.warn(`Kafka indisponível, a API vai subir sem o consumidor de eventos: ${error.message}`);
  }

  await app.listen(process.env.PORT || 3800, '0.0.0.0', () => {
    console.log(`Starting on PORT: ${process.env.PORT || 3800}`);
  });
}
bootstrap();
