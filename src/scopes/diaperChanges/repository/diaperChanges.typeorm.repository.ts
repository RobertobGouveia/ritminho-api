import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { DiaperChanges } from "../entities/diaperChanges.entity";

export class DiaperChangesTypeOrmRepository extends Repository<DiaperChanges>{
    constructor(
        @InjectRepository(DiaperChanges)
        private readonly diaperChangesRepository: Repository<DiaperChanges>
    ){
        super(diaperChangesRepository.target, diaperChangesRepository.manager, diaperChangesRepository.queryRunner)
    }
}