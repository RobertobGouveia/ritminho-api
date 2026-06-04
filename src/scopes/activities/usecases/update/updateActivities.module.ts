import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { ActivitiesRepositoryModule } from "../../repository/activities.repository.module";
import { UpdateActivitiesUseCase } from "./updateActivities.usecase";

@Module({
    imports: [BabyRepositoryModule, ActivitiesRepositoryModule],
    providers: [UpdateActivitiesUseCase],
    exports: [UpdateActivitiesUseCase]
})

export class UpdateActivitiesModule{}