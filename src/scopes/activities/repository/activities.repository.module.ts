import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Activities } from "../entities/activities.entity";
import { ActivitiesTypeOrmRepository } from "./activities.typeorm.repository";
import { ActivitiesRepository } from "./activities.repository";

@Module({
    imports:[TypeOrmModule.forFeature([Activities])],
    providers:[ ActivitiesTypeOrmRepository, ActivitiesRepository],
    exports:[ActivitiesRepository]
})

export class ActivitiesRepositoryModule{}