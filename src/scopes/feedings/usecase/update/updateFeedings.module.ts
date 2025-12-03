import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { UpdateFeedingsUseCase } from "./updateFeedings.usecase";
import { UpdateFeedingsValidator } from "./updateFeedings.validator";
import { FeedingsRepositoryModule } from "../../repository";

@Module({
    imports: [BabyRepositoryModule, FeedingsRepositoryModule],
    providers: [UpdateFeedingsUseCase, UpdateFeedingsValidator],
    exports: [UpdateFeedingsUseCase]
})

export class UpdateFeedingsModule{}