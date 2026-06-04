import { Module } from "@nestjs/common";
import { FeedingsTypeOrmRepository } from "../../repository/feedings.typeorm.repository";
import { FeedingsRepository } from "../../repository/feedings.repository";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { FeedingsRepositoryModule } from "../../repository";
import { CreateFeedingsUseCase } from "./createFeedings.usecase";

@Module({
    imports:[ FeedingsRepositoryModule, BabyRepositoryModule],
    providers: [CreateFeedingsUseCase],
    exports: [CreateFeedingsUseCase]
})

export class CreateFeedingsModule{}