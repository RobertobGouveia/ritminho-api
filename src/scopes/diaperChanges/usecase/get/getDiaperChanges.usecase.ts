import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { GetDiaperChangesUseCaseInput } from "./getDiaperChanges.usecase.input";
import { GetDiaperChangesUseCaseOutput } from "./getDiaperChanges.usecase.output";
import { GetDiaperChangesValidator } from "./getDiaperChanges.validator";
import { BabyRepository } from "src/scopes/babies/repository";
import { DiaperChangesRepository } from "../../repository/diaperChanges.repository";

@Injectable()
export class GetDiaperChangesUseCase implements BaseUseCase<GetDiaperChangesUseCaseInput, GetDiaperChangesUseCaseOutput[]>{
    constructor(
        private readonly validator: GetDiaperChangesValidator,
        private readonly baby: BabyRepository,
        private readonly diaperChanges: DiaperChangesRepository
    ){}

    async execute(input?: GetDiaperChangesUseCaseInput): Promise<GetDiaperChangesUseCaseOutput[]> {
        await this.validator.validate(input);

        const baby = await this.baby.findById(input.babyId)

        if(!baby){
            console.log(`Baby ${input.babyId} not found`)
            throw new NotFoundException()
        }
        
        const diaperChanges = await this.diaperChanges.findByBabyId(baby.id)
        

        return diaperChanges.map(change => ({
            type: change.type,
            details: change.details ?? '',
        }))
    }
}