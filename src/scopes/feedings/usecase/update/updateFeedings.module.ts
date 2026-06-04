import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { UpdateFeedingsUseCase } from "./updateFeedings.usecase";
import { FeedingsRepositoryModule } from "../../repository";

@Module({
    imports: [BabyRepositoryModule, FeedingsRepositoryModule],
    providers: [UpdateFeedingsUseCase],
    exports: [UpdateFeedingsUseCase]
})

export class UpdateFeedingsModule{}