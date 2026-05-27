import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { KafkaService } from './kafka.service';
import { KafkaConsumerService } from './kafka.consumer';
import {
  KAFKA_SERVICE,
  KAFKA_BROKER,
  KAFKA_CLIENT_ID,
  KAFKA_GROUP_ID,
} from './kafka.constants';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: KAFKA_SERVICE,
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: KAFKA_CLIENT_ID,
            brokers: [KAFKA_BROKER],
          },
          consumer: {
            groupId: KAFKA_GROUP_ID,
          },
        },
      },
    ]),
  ],
  controllers: [KafkaConsumerService],
  providers: [KafkaService],
  exports: [KafkaService],
})
export class KafkaModule {}
