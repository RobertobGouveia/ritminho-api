import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { MoodRepositoryModule } from "../../repository/mood.repository.module";
import { UpdateMoodUseCase } from "./updateMood.usecase";

@Module({
    imports: [BabyRepositoryModule, MoodRepositoryModule],
    providers: [UpdateMoodUseCase],
    exports: [UpdateMoodUseCase]
})

export class UpdateMoodModule{}