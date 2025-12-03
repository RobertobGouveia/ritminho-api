import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { UpdateDiaperChangesUseCaseInput } from "./updateDiaperChanges.usecase.input";
import { UpdateDiaperChangesUseCaseOutput } from "./updateDiaperChanges.usecase.output";
import { UpdateDiaperChangesValidator } from "./updateDiaperChanges.validator";
import { BabyRepository } from "src/scopes/babies/repository";
import { DiaperChangesRepository } from "../../repository/diaperChanges.repository";

@Injectable()
export class UpdateDiaperChangesUseCase implements BaseUseCase<UpdateDiaperChangesUseCaseInput, UpdateDiaperChangesUseCaseOutput>{
    constructor(
        private readonly validator: UpdateDiaperChangesValidator, 
        private readonly babyRepository: BabyRepository,
        private readonly diaperChangesRepository: DiaperChangesRepository
    ){}

    async execute(input?: UpdateDiaperChangesUseCaseInput): Promise<UpdateDiaperChangesUseCaseOutput> {
        await this.validator.validate(input)

        const baby = await this.babyRepository.findById(input.babyId)
        if(!baby){
            throw new NotFoundException("Baby not found")
        }

        const diaperChange = await this.diaperChangesRepository.findByIdAndBabyId(input.diaperId, input.babyId)
        
        const updatedDiaperChanges = await this.diaperChangesRepository.update({
            ...diaperChange,
            type: input.type,
            details: input.details
        })
        
        return {
            diaperId: updatedDiaperChanges.id,
            type: updatedDiaperChanges.type,
            details: updatedDiaperChanges.details
        }
    }
}