import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { GeminiService } from '../gemini.service';
import { JwtGuard } from 'src/infrastructure/authentication/jwt.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@ApiTags('AI')
@ApiBearerAuth('access-token')
@UseGuards(JwtGuard)
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