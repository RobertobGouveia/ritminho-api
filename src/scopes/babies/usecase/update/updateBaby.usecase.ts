import { Injectable } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { UpdateBabyUseCaseInput } from "./updateBaby.usecase.input";
import { UpdateBabyUseCaseOutput } from "./updateBaby.usecase.output";
import { BabyRepository } from "../../repository";

@Injectable()
export class UpdateBabyUseCase implements BaseUseCase<UpdateBabyUseCaseInput, UpdateBabyUseCaseOutput>{
    constructor(
        private readonly babyRepository: BabyRepository
    ){}

    async execute(input?: UpdateBabyUseCaseInput): Promise<UpdateBabyUseCaseOutput> {

        const baby = await this.babyRepository.findById(input.babyId)

        const updatedBaby = await this.babyRepository.update({
            ...baby,
            name: input.name,
            birthDate: input.birthDate,
            gender: input.gender,
            currentLength: input.currentLength,
            currentWeight: input.currentWeight
        })
        
        return updatedBaby
    }
}