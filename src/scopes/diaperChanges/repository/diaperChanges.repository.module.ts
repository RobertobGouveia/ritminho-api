import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { DiaperChanges } from "../entities/diaperChanges.entity";
import { DiaperChangesTypeOrmRepository } from "./diaperChanges.typeorm.repository";
import { DiaperChangesRepository } from "./diaperChanges.repository";

@Module({
    imports: [TypeOrmModule.forFeature([DiaperChanges])],
    providers: [DiaperChangesTypeOrmRepository, DiaperChangesRepository],
    exports: [DiaperChangesRepository]
})

export class DiaperChangesRepositoryModule{}