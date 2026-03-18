import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DB_PORT)

  app.enableCors({
    origin: true,
    credentials:true
  })

  await app.listen(process.env.PORT || 3800, '0.0.0.0', () => {
    console.log(`Starting on PORT: ${process.env.PORT || 3800}`);
  });
}
bootstrap();
