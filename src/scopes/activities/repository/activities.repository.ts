import { Injectable } from "@nestjs/common";
import { ActivitiesTypeOrmRepository } from "./activities.typeorm.repository";
import { Activities } from "../entities/activities.entity";

@Injectable()
export class ActivitiesRepository {
    constructor(
        private readonly activitiesTypeOrmRepository: ActivitiesTypeOrmRepository
    ){}

    create(activities: Activities[]): Promise<Activities[]>{
        return this.activitiesTypeOrmRepository.save(activities)
    }
}