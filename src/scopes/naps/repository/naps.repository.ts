import { Injectable } from "@nestjs/common";
import { NapsTypeOrmRepository } from "./naps.typeorm.repository";
import { Naps } from "../entities/naps.entity";

@Injectable()
export class NapsRepository {
    constructor(
        private readonly napsTypeOrmRepository: NapsTypeOrmRepository
    ){}

    create(naps: Naps[]): Promise<Naps[]>{
        return this.napsTypeOrmRepository.save(naps)
    }
}