import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { MoodRepositoryModule } from "../../repository/mood.repository.module";
import { GetMoodUseCase } from "./getMood.usecase";

@Module({
    imports: [BabyRepositoryModule, MoodRepositoryModule],
    providers: [GetMoodUseCase],
    exports: [GetMoodUseCase]
})

export class GetMoodModule{}