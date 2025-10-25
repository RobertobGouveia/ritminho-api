import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DB_PORT)
  await app.listen(process.env.PORT, () => {
    console.log(`Starting on PORT: ${process.env.PORT}`);
  });
}
bootstrap();
