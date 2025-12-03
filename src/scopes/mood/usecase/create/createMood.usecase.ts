import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { CreateMoodUseCaseInput } from "./createMood.usecase.input";
import { CreateMoodUseCaseOutput } from "./createMood.usecase.output";
import { CreateMoodValidator } from "./createMood.validator";
import { BabyRepository } from "src/scopes/babies/repository";
import { Mood } from "../../entities/mood.entity";
import { MoodRepository } from "../../repository/mood.repositoy";

@Injectable()
export class CreateMoodUseCase implements BaseUseCase<CreateMoodUseCaseInput, CreateMoodUseCaseOutput>{
    constructor(
        private readonly validator: CreateMoodValidator,
        private readonly babyRepository: BabyRepository,
        private readonly moodRepository: MoodRepository
    ){}

    async execute(input?: CreateMoodUseCaseInput): Promise<CreateMoodUseCaseOutput> {
        await this.validator.validate(input);

        const baby = await this.babyRepository.findById(input.babyId);

        if(!baby){
            throw new NotFoundException(`There is no baby with the id: ${baby.id}`)
        }

        const mood = new Mood()
        mood.baby = baby;
        mood.moodType = input.mood;

        const moodSaved = await this.moodRepository.create(mood)
        
        return {
            babyId: baby.id,
            moodId: moodSaved.id,
            mood: moodSaved.moodType
        }
    }
}