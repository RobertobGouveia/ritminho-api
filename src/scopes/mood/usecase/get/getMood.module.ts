import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { MoodRepositoryModule } from "../../repository/mood.repository.module";
import { GetMoodUseCase } from "./getMood.usecase";
import { GetMoodValidator } from "./getMood.validator";

@Module({
    imports: [BabyRepositoryModule, MoodRepositoryModule],
    providers: [GetMoodUseCase, GetMoodValidator],
    exports: [GetMoodUseCase]
})

export class GetMoodModule{}