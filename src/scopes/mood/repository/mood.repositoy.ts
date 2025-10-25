import { Injectable } from "@nestjs/common";
import { Mood } from "../entities/mood.entity";
import { MoodTypeOrmRepository } from "./mood.typeorm.repoitory";

@Injectable()
export class MoodRepository {
    constructor(
        private readonly moodTypeOrmRepostory: MoodTypeOrmRepository
    ){}

    create(mood: Mood[]): Promise<Mood[]> {
       return this.moodTypeOrmRepostory.save(mood)
    }
}