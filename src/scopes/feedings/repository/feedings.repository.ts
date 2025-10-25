import { Injectable } from "@nestjs/common";
import { FeedingsTypeOrmRepository } from "./feedings.typeorm.repository";
import { Feedings } from "../entity/feedings.entity";

@Injectable()
export class FeedingsRepository {
    constructor(
        private readonly feedingsTypeOrRepository: FeedingsTypeOrmRepository
    ){}

    create(feedings: Feedings): Promise<Feedings>{
       return this.feedingsTypeOrRepository.save(feedings)
    }
}