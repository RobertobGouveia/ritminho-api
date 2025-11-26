import { Injectable } from "@nestjs/common";
import { Mood } from "../entities/mood.entity";
import { MoodTypeOrmRepository } from "./mood.typeorm.repoitory";

@Injectable()
export class MoodRepository {
    constructor(
        private readonly moodTypeOrmRepostory: MoodTypeOrmRepository
    ){}

    create(mood: Mood): Promise<Mood> {
       return this.moodTypeOrmRepostory.save(mood)
    }

    findByBabyId(babyId: string): Promise<Mood[]>{
        return this.moodTypeOrmRepostory.find({
            where: {
                baby: {
                    id: babyId
                }
            },
            relations: ['baby'],
            order: {
                createdAt: 'DESC'
            }
        })
    }

    findById(moodId: string): Promise<Mood>{
        return this.moodTypeOrmRepostory.findOne({
            where: {
                id: moodId
            }
        })
    }

    update(mood: Mood): Promise<Mood>{
        return this.moodTypeOrmRepostory.save(mood)
    }
}