import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Mood } from "../entities/mood.entity";
import { MoodTypeOrmRepository } from "./mood.typeorm.repoitory";
import { MoodRepository } from "./mood.repositoy";


@Module({
    imports: [TypeOrmModule.forFeature([Mood])],
    providers: [MoodTypeOrmRepository, MoodRepository],
    exports: [MoodRepository]
})

export class MoodRepositoryModule{}