import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Mood } from "../entities/mood.entity";

export class MoodTypeOrmRepository extends Repository<Mood>{
    constructor(
        @InjectRepository(Mood)
        private readonly moodRepository: Repository<Mood>
    ){
        super(moodRepository.target, moodRepository.manager, moodRepository.queryRunner)
    }
}