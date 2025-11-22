import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { UpdateBabyUseCaseInput } from "./updateBaby.usecase.input";
import { UpdateBabyUseCaseOutput } from "./updateBaby.usecase.output";
import { UpdateBabyValidator } from "./updateBaby.validator";
import { UserRepository } from "src/scopes/users/repository";
import { BabyRepository } from "../../repository";
import { Baby } from "../../entity/babies.entity";

@Injectable()
export class UpdateBabyUseCase implements BaseUseCase<UpdateBabyUseCaseInput, UpdateBabyUseCaseOutput>{
    constructor(
        private readonly validator: UpdateBabyValidator,
        private readonly babyRepository: BabyRepository
    ){}

    async execute(input?: UpdateBabyUseCaseInput): Promise<UpdateBabyUseCaseOutput> {
        await this.validator.validate(input)

        const baby = await this.babyRepository.findById(input.babyId)

        const updatedBaby = await this.babyRepository.update({
            ...baby,
            name: input.name,
            birthDate: input.birthDate,
            gender: input.gender,
            
        })
        
        return updatedBaby
    }
}