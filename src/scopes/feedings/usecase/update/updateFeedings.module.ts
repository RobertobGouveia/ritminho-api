import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { UpdateFeedingsUseCase } from "./updateFeedings.usecase";
import { UpdateFeedingsValidator } from "./updateFeedings.validator";

@Module({
    imports: [BabyRepositoryModule],
    providers: [UpdateFeedingsUseCase, UpdateFeedingsValidator],
    exports: [UpdateFeedingsUseCase]
})

export class UpdateFeedingsModule{}