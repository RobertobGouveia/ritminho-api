import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Naps } from "../entities/naps.entity";
import { NapsTypeOrmRepository } from "./naps.typeorm.repository";
import { NapsRepository } from "./naps.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Naps])],
    providers: [NapsTypeOrmRepository, NapsRepository],
    exports: [NapsRepository]
})

export class NapsRepositoryModule{}