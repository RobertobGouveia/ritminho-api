import { Module } from "@nestjs/common";
import { UserRepositoryModule } from "src/scopes/users/repository";
import { BabyRepositoryModule } from "../../repository";
import CreateBabyUseCase from "./createBaby.usecase";
import CreateBabyValidator from "./createBaby.validator";
import { KafkaService } from "src/kafka/kafka.service";
import { KafkaModule } from "src/kafka/kafka.module";

@Module({
    imports:[ BabyRepositoryModule, UserRepositoryModule, KafkaModule],
    providers: [CreateBabyUseCase, CreateBabyValidator],
    exports: [CreateBabyUseCase]
})

export class CreateBabyModule{}