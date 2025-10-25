import { Module } from "@nestjs/common";
import { CreateActivitiesUseCaseModule } from "./usecases/create/createActivities.module";
import { ActivitiesController } from "./controller/activities.controller";

@Module({
    imports:[CreateActivitiesUseCaseModule],
    controllers: [ActivitiesController]
})
export class ActivitiesModule {}