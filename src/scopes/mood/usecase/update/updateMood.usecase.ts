import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { UpdateMoodUseCaseInput } from "./updateMood.usecase.input";
import { UpdateMoodUseCaseOutput } from "./updateMood.usecase.output";
import { BabyRepository } from "src/scopes/babies/repository";
import { MoodRepository } from "../../repository/mood.repositoy";

@Injectable()
export class UpdateMoodUseCase implements BaseUseCase<UpdateMoodUseCaseInput, UpdateMoodUseCaseOutput>{
    constructor(
        private readonly babyRepository: BabyRepository,
        private readonly moodRepository: MoodRepository
    ){}

    async execute(input?: UpdateMoodUseCaseInput): Promise<UpdateMoodUseCaseOutput> {

        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
            throw new NotFoundException(`Baby ${input.babyId} not found`)
        }

        const mood = await this.moodRepository.findByIdAndBabyId(input.moodId, input.babyId)
                
        const updatedMood = await this.moodRepository.update({
            ...mood,
            moodType: input.mood ?? mood.moodType
        })
        
        return {
            moodId: updatedMood.id,
            mood: updatedMood.moodType
        }
    }
}