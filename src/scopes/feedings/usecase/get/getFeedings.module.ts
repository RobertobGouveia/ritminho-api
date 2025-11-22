import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { FeedingsRepositoryModule } from "../../repository";
import { GetFeedingsUseCase } from "./getFeedings.usecase";
import { GetFeedingsValidator } from "./getFeedings.validator";

@Module({
    imports: [BabyRepositoryModule, FeedingsRepositoryModule],
    providers: [GetFeedingsUseCase, GetFeedingsValidator],
    exports: [GetFeedingsUseCase]
})

export class GetFeedingsModule{}