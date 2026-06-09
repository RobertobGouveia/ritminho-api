import { Module } from "@nestjs/common";
import { MoodRepositoryModule } from "../../repository/mood.repository.module";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { CreateMoodUseCase } from "./createMood.usecase";

@Module({
    imports: [MoodRepositoryModule, BabyRepositoryModule], 
    providers: [CreateMoodUseCase],
    exports: [CreateMoodUseCase] 
})

export class CreateMoodModule{}