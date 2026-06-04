import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { CreateActivitesUseCase } from "./createActivities.usecase";
import { ActivitiesRepositoryModule } from "../../repository/activities.repository.module";

@Module({
    imports:[BabyRepositoryModule, ActivitiesRepositoryModule],
    providers:[CreateActivitesUseCase],
    exports:[CreateActivitesUseCase]
})
export class CreateActivitiesUseCaseModule{}    