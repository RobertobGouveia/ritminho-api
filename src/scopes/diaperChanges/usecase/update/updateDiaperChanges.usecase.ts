import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { UpdateDiaperChangesUseCaseInput } from "./updateDiaperChanges.usecase.input";
import { UpdateDiaperChangesUseCaseOutput } from "./updateDiaperChanges.usecase.output";
import { UpdateDiaperChangesValidator } from "./updateDiaperChanges.validator";
import { BabyRepository } from "src/scopes/babies/repository";

@Injectable()
export class UpdateDiaperChangesUseCase implements BaseUseCase<UpdateDiaperChangesUseCaseInput, UpdateDiaperChangesUseCaseOutput>{
    constructor(
        private readonly validator: UpdateDiaperChangesValidator, 
        private readonly babyRepository: BabyRepository
    ){}

    async execute(input?: UpdateDiaperChangesUseCaseInput): Promise<UpdateDiaperChangesUseCaseOutput> {
        await this.validator.validate(input)

        const baby = await this.babyRepository.findById(input.babyId)
        if(!baby){
            throw new NotFoundException("Baby not found")
        }

        const diaperChange = baby.diaper.find(d => d.id === input.diaperId)

        diaperChange.type = input.type ?? diaperChange.type;
        diaperChange.details = input.details ?? diaperChange.details
        
        const updatedBaby = await this.babyRepository.update(baby)

        return updatedBaby
    }
}