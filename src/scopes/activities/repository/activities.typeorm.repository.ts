import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Activities } from "../entities/activities.entity";

export class ActivitiesTypeOrmRepository extends Repository<Activities>{
    constructor(
        @InjectRepository(Activities)
        private readonly activitiesRepository: Repository<Activities>
    ){
        super(activitiesRepository.target, activitiesRepository.manager, activitiesRepository.queryRunner)
    }
}