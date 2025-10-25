import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { CreateActivitesUseCase } from "./createActivities.usecase";
import { ActivitiesRepositoryModule } from "../../repository/activities.repository.module";
import { CreateActivitiesValidator } from "./createActivities.validator";

@Module({
    imports:[BabyRepositoryModule, ActivitiesRepositoryModule],
    providers:[CreateActivitesUseCase, CreateActivitiesValidator],
    exports:[CreateActivitesUseCase]
})
export class CreateActivitiesUseCaseModule{}