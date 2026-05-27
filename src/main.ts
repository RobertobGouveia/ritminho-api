import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DB_PORT)

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

  await app.startAllMicroservices();
  await app.listen(process.env.PORT || 3800, '0.0.0.0', () => {
    console.log(`Starting on PORT: ${process.env.PORT || 3800}`);
  });
}
bootstrap();
