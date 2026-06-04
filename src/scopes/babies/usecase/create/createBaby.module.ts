import { Module } from "@nestjs/common";
import { UserRepositoryModule } from "src/scopes/users/repository";
import { BabyRepositoryModule } from "../../repository";
import CreateBabyUseCase from "./createBaby.usecase";
import { KafkaModule } from "src/kafka/kafka.module";

@Module({
    imports:[ BabyRepositoryModule, UserRepositoryModule, KafkaModule],
    providers: [CreateBabyUseCase],
    exports: [CreateBabyUseCase]
})

export class CreateBabyModule{}