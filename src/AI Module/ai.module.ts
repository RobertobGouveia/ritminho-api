import { Module } from '@nestjs/common';
import { AiController } from './AIController/AiController';
import { GeminiService } from './gemini.service';

@Module({
  controllers: [AiController],
  providers: [GeminiService],
  exports: [GeminiService],
})
export class AiModule {}