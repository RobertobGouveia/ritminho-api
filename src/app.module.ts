import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from './config/dataBase.config';
import { ScopesModule } from './scopes/scopes.module';
import { AiModule } from './AI Module/ai.module';
import { KafkaModule } from './kafka/kafka.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        '.env.secrets',
        !!process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : '.env.local',
      ]
}),
  TypeOrmModule.forRoot(dataSourceOptions),
  ScopesModule,
  AiModule,
  KafkaModule,
],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}