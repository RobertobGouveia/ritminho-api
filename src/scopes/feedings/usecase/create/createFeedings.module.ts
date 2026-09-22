import { Module } from "@nestjs/common";
import { FeedingsTypeOrmRepository } from "../../repository/feedings.typeorm.repository";
import { FeedingsRepository } from "../../repository/feedings.repository";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { FeedingsRepositoryModule } from "../../repository";
import { CreateFeedingsUseCase } from "./createFeedings.usecase";
import { KafkaModule } from "src/kafka/kafka.module";

@Module({
    imports:[ FeedingsRepositoryModule, BabyRepositoryModule, KafkaModule],
    providers: [CreateFeedingsUseCase],
    exports: [CreateFeedingsUseCase]
})

export class CreateFeedingsModule{}