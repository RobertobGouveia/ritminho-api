import { Injectable } from "@nestjs/common";
import { DiaperChangesTypeOrmRepository } from "./diaperChanges.typeorm.repository";
import { DiaperChanges } from "../entities/diaperChanges.entity";

@Injectable()
export class DiaperChangesRepository {
    constructor(
        private readonly diaperChangesTypeOrmRepository: DiaperChangesTypeOrmRepository
    ){}

    create(diaperChanges: DiaperChanges): Promise<DiaperChanges>{
        return this.diaperChangesTypeOrmRepository.save(diaperChanges)
    }

    findByBabyId(babyId: string): Promise<DiaperChanges[]>{
        return this.diaperChangesTypeOrmRepository.find({
            where: {baby:{
                id: babyId
            }},
            relations: ['baby'],
            order: {
                createdAt: 'DESC'
            }
        })
    }

    findByIdAndBabyId(id: string, babyId: string): Promise<DiaperChanges>{
        return this.diaperChangesTypeOrmRepository.findOne({
            where: {
                id: id, baby: {id: babyId}
            },
            relations: {
                baby: true
            }
        })
    }

    update(diaperChanges: DiaperChanges): Promise<DiaperChanges>{
        return this.diaperChangesTypeOrmRepository.save(diaperChanges)
    }
}