import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { ActivitiesRepositoryModule } from "../../repository/activities.repository.module";
import { GetActivitiesUseCase } from "./getActivities.usecase";

@Module({
    imports: [BabyRepositoryModule, ActivitiesRepositoryModule],
    providers: [GetActivitiesUseCase],
    exports: [GetActivitiesUseCase]
})

export class GetActivitiesModule{}