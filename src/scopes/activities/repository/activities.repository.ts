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

    findByBabyId(id: string): Promise<Activities[]>{
        return this.activitiesTypeOrmRepository.find({
            where: {
                baby: {
                    id: id
                }
            },
            relations: ['baby'],
            order: {
                createdAt: 'DESC'
            }
        })
    }

    findByIdAndBabyId(id: string, babyId: string): Promise<Activities>{
        return this.activitiesTypeOrmRepository.findOne({
            where: {
                id: id, baby: { id: babyId}
            },
            relations: {
                baby: true
            }
        })
    }

    update(activities: Activities): Promise<Activities>{
        return this.activitiesTypeOrmRepository.save(activities)
    }
}