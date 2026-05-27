import { Module } from "@nestjs/common";
import { UserRepositoryModule } from "src/scopes/users/repository";
import { BabyRepositoryModule } from "../../repository";
import CreateBabyUseCase from "./createBaby.usecase";
import CreateBabyValidator from "./createBaby.validator";
import { KafkaService } from "src/kafka/kafka.service";

@Module({
    imports:[ BabyRepositoryModule, UserRepositoryModule ],
    providers: [CreateBabyUseCase, CreateBabyValidator, KafkaService],
    exports: [CreateBabyUseCase]
})

export class CreateBabyModule{}