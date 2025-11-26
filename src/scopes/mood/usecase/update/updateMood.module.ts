import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { MoodRepositoryModule } from "../../repository/mood.repository.module";
import { UpdateMoodUseCase } from "./updateMood.usecase";
import { UpdateMoodValidator } from "./updateMood.validator";

@Module({
    imports: [BabyRepositoryModule, MoodRepositoryModule],
    providers: [UpdateMoodUseCase, UpdateMoodValidator],
    exports: [UpdateMoodUseCase]
})

export class UpdateMoodModule{}