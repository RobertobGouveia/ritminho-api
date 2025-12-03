import { Module } from "@nestjs/common";
import { CreateActivitiesUseCaseModule } from "./usecases/create/createActivities.module";
import { ActivitiesController } from "./controller/activities.controller";
import { GetActivitiesModule } from "./usecases/get/getActivities.module";
import { UpdateActivitiesModule } from "./usecases/update/updateActivities.module";

@Module({
    imports:[CreateActivitiesUseCaseModule, GetActivitiesModule, UpdateActivitiesModule],
    controllers: [ActivitiesController]
})
export class ActivitiesModule {}