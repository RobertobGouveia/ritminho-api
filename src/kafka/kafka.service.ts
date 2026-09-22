import { Inject, Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { ClientKafka } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { BABY_CREATED_TOPIC, FEEDINGS_CREATED_TOPIC, KAFKA_SERVICE } from './kafka.constants';

@Injectable()
export class KafkaService implements OnModuleInit {
  private readonly logger = new Logger(KafkaService.name);

  constructor(
    @Inject(KAFKA_SERVICE)
    private readonly kafkaClient: ClientKafka,
  ) {}

  async onModuleInit() {
    try {
      await this.kafkaClient.connect();
    } catch (error) {
      this.logger.warn(`Não foi possível conectar ao Kafka, eventos não serão emitidos: ${error.message}`);
    }
  }

  async emitBabyCreated(payload: Record<string, unknown>) {
    this.logger.log(`Producing Kafka event ${BABY_CREATED_TOPIC}`);
    try {
      return await firstValueFrom(this.kafkaClient.emit(BABY_CREATED_TOPIC, payload));
    } catch (error) {
      this.logger.warn(`Falha ao emitir evento ${BABY_CREATED_TOPIC}: ${error.message}`);
    }
  }

  async emitFeedingCreated(payload: Record<string, unknown>) {
    this.logger.log(`Producing Kafka event ${FEEDINGS_CREATED_TOPIC}`);
    try {
      return await firstValueFrom(this.kafkaClient.emit(FEEDINGS_CREATED_TOPIC, payload));
    } catch (error) {
      this.logger.warn(`Falha ao emitir evento ${FEEDINGS_CREATED_TOPIC}: ${error.message}`);
    }
  }
}
