import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { GetBabyUseCaseInput } from "./getBaby.usecase.input";
import { GetBabyUseCaseOutput } from "./getBaby.usecase.output";
import { BabyRepository } from "../../repository";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export default class GetBabyUseCase implements BaseUseCase<GetBabyUseCaseInput, GetBabyUseCaseOutput>{
    constructor(
        private readonly babyRepository: BabyRepository
    ){}

    async execute(input?: GetBabyUseCaseInput): Promise<GetBabyUseCaseOutput> {

        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
            throw new NotFoundException(`Baby ${input.babyId} not found`);
        }

        return {
            id: baby.id,
            name: baby.name,
            birthDate: baby.birthDate,
            gender: baby.gender,
            user: baby.user.id,
            activities: baby.activities,
            diaperChanges: baby.diaper,
            feedings: baby.feedings,
            mood: baby.mood,
            naps: baby.naps,
            currentLength: baby.currentLength,
            currentWeight: baby.currentWeight
        }
    }
}