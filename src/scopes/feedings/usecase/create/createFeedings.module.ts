import { Module } from "@nestjs/common";
import { FeedingsTypeOrmRepository } from "../../repository/feedings.typeorm.repository";
import { FeedingsRepository } from "../../repository/feedings.repository";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { FeedingsRepositoryModule } from "../../repository";
import { CreateFeedingsUseCase } from "./createFeedings.usecase";
import { CreateFeedingsValidator } from "./createFeedings.validator";

@Module({
    imports:[ FeedingsRepositoryModule, BabyRepositoryModule],
    providers: [CreateFeedingsUseCase, CreateFeedingsValidator],
    exports: [CreateFeedingsUseCase]
})

export class CreateFeedingsModule{}