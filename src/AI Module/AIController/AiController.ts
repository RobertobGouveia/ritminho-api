import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { GeminiService } from '../gemini.service';

@Controller('v1/ai')
export class AiController {
  constructor(private readonly geminiService: GeminiService) {}

  @Post('/report')
  @HttpCode(HttpStatus.OK)
  async generateReport(@Body() body: { data: any }) {
    const report = await this.geminiService.generateText(body.data);
    return { report };
  }
}