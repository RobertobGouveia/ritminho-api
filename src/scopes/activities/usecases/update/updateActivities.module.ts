import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { ActivitiesRepositoryModule } from "../../repository/activities.repository.module";
import { UpdateActivitiesUseCase } from "./updateActivities.usecase";
import { UpdateActivitiesValidator } from "./updateActivities.validator";

@Module({
    imports: [BabyRepositoryModule, ActivitiesRepositoryModule],
    providers: [UpdateActivitiesUseCase, UpdateActivitiesValidator],
    exports: [UpdateActivitiesUseCase]
})

export class UpdateActivitiesModule{}