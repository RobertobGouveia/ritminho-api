import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { FeedingsRepositoryModule } from "../../repository";
import { GetFeedingsUseCase } from "./getFeedings.usecase";

@Module({
    imports: [BabyRepositoryModule, FeedingsRepositoryModule],
    providers: [GetFeedingsUseCase],
    exports: [GetFeedingsUseCase]
})

export class GetFeedingsModule{}