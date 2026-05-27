import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { BABY_CREATED_TOPIC, KAFKA_SERVICE } from './kafka.constants';

@Injectable()
export class KafkaService implements OnModuleInit {
  private readonly logger = new Logger(KafkaService.name);

  constructor(
    @Inject(KAFKA_SERVICE)
    private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    await this.kafkaClient.connect();
  }

  emitBabyCreated(payload: Record<string, unknown>) {
    this.logger.log(`Producing Kafka event ${BABY_CREATED_TOPIC}`);
    return this.kafkaClient.emit(BABY_CREATED_TOPIC, payload);
  }
}
