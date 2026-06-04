import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { CreateDiaperChangesUseCaseInput } from "./createDiaperChanges.usecase.input";
import { CreateDiaperChangesUseCaseOutput } from "./createDiaperChanges.usecase.output";
import { BabyRepository } from "src/scopes/babies/repository";
import { DiaperChanges } from "../../entities/diaperChanges.entity";
import { DiaperChangesRepository } from "../../repository/diaperChanges.repository";

@Injectable()
export class CreateDiaperChangesUseCase implements BaseUseCase<CreateDiaperChangesUseCaseInput, CreateDiaperChangesUseCaseOutput>{
    constructor(
        private readonly babyRepository: BabyRepository,
        private readonly diaperChangesRepository: DiaperChangesRepository
    ){}

    async execute(input?: CreateDiaperChangesUseCaseInput): Promise<CreateDiaperChangesUseCaseOutput> {

        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby) {
            throw new NotFoundException(`There is no baby with the id: ${input.babyId}`)
        }
        
        const diaperChanges = new DiaperChanges();
        diaperChanges.baby = baby
        diaperChanges.type = input.type,
        diaperChanges.details = input.details

        const diaperChangesSaved = await this.diaperChangesRepository.create(diaperChanges)
        
        return diaperChangesSaved
    }
}