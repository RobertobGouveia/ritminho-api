import { Controller, Logger } from '@nestjs/common';
import { Ctx, KafkaContext, MessagePattern, Payload } from '@nestjs/microservices';
import { BABY_CREATED_TOPIC } from './kafka.constants';

@Controller()
export class KafkaConsumerService {
  private readonly logger = new Logger(KafkaConsumerService.name);

  @MessagePattern(BABY_CREATED_TOPIC)
  async handleBabyCreated(@Payload() message: any, @Ctx() context: KafkaContext) {
    const value = message?.value ?? message;
    this.logger.log(`Received Kafka event ${BABY_CREATED_TOPIC}: ${JSON.stringify(value)}`);
    // TODO: adicione aqui o processamento assíncrono do evento baby.created.
  }
}
