import { Module } from "@nestjs/common";
import { MoodRepositoryModule } from "../../repository/mood.repository.module";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { CreateMoodUseCase } from "./createMood.usecase";
import { CreateMoodValidator } from "./createMood.validator";

@Module({
    imports: [MoodRepositoryModule, BabyRepositoryModule], 
    providers: [CreateMoodUseCase, CreateMoodValidator],
    exports: [CreateMoodUseCase] 
})

export class CreateMoodModule{}