import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { GetMoodUseCaseInput } from "./getMood.usecase.input";
import { GetMoodUseCaseOutput } from "./getMood.usecase.output";
import { GetMoodValidator } from "./getMood.validator";
import { BabyRepository } from "src/scopes/babies/repository";
import { MoodRepository } from "../../repository/mood.repositoy";

@Injectable()
export class GetMoodUseCase implements BaseUseCase<GetMoodUseCaseInput, GetMoodUseCaseOutput[]>{
    constructor(
        private readonly validator: GetMoodValidator,
        private readonly babyRepository: BabyRepository,
        private readonly moodRepository: MoodRepository
    ){}

    async execute(input?: GetMoodUseCaseInput): Promise<GetMoodUseCaseOutput[]> {
        await this.validator.validate(input)

        const baby = await this.babyRepository.findById(input.babyId)
        if(!baby){
            throw new NotFoundException(`Baby ${input.babyId} not found`);
        }

        const moods = await this.moodRepository.findByBabyId(baby.id)

        return moods.map(mood => ({
            moodId: mood.id,
            mood: {
                type: mood.moodType
            }
        }))
    }
}