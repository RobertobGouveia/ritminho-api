import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Naps } from "../entities/naps.entity";

export class NapsTypeOrmRepository extends Repository<Naps>{
    constructor(
        @InjectRepository(Naps)
        private readonly napsRepository: Repository<Naps>
    ){
        super(napsRepository.target, napsRepository.manager, napsRepository.queryRunner)
    }
}