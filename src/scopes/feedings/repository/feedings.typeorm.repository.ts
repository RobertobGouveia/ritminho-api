import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Feedings } from "../entity/feedings.entity";

export class FeedingsTypeOrmRepository extends Repository<Feedings>{
    constructor(
        @InjectRepository(Feedings)
        private readonly feedingsRepository: Repository<Feedings>
    ){
        super(feedingsRepository.target, feedingsRepository.manager, feedingsRepository.queryRunner)
    }
}