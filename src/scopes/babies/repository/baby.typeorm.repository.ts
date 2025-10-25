import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Baby } from "../entity/babies.entity";

export class BabyTypeOrmRepository extends Repository<Baby>{
    constructor(
        @InjectRepository(Baby)
        private readonly babyRepository: Repository<Baby>
    ){
        super(babyRepository.target, babyRepository.manager, babyRepository.queryRunner)
    }
}