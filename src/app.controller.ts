import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Health')
@Controller()
export class AppController {
  constructor() {}

  @Get('health-check')
  async healthCheck(): Promise<{ message: string}> {
    return { message: 'OK'};
  }
}
