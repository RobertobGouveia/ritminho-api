import { Injectable } from "@nestjs/common";
import { BabyTypeOrmRepository } from "./baby.typeorm.repository";
import { Baby } from "../entity/babies.entity";

@Injectable()
export class BabyRepository {
    constructor(
        private readonly babyRepositoryTypeorm: BabyTypeOrmRepository
    ){}

    create(baby: Baby[]): Promise<Baby[]>{
       return this.babyRepositoryTypeorm.save(baby)
    }

    update(baby: Baby): Promise<Baby>{
       return this.babyRepositoryTypeorm.save(baby)
    }

    findById(babyId: string): Promise<Baby>{
        return this.babyRepositoryTypeorm.findOne({ 
            where: {
                id: babyId
            },
            relations: ['user', 'activities', 'diaper', 'feedings', 'mood', 'naps']
         })
    }
}