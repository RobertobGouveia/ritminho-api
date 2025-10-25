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
}