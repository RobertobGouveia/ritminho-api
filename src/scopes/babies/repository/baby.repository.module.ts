import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Baby } from "../entity/babies.entity";
import { BabyTypeOrmRepository } from "./baby.typeorm.repository";
import { BabyRepository } from "./baby.repository";

@Module({
    imports: [TypeOrmModule.forFeature([Baby])],
    providers: [BabyTypeOrmRepository, BabyRepository],
    exports: [BabyRepository]
})

export class BabyRepositoryModule{}