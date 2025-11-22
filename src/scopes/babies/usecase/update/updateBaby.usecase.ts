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
        private readonly userRepository: UserRepository,
        private readonly babyRepository: BabyRepository
    ){}

    async execute(input?: UpdateBabyUseCaseInput): Promise<UpdateBabyUseCaseOutput> {
        await this.validator.validate(input)

        const user = await this.userRepository.findById(input.userId)
        if(!user){
            console.log(`User ${input.userId} not found`)
            throw new NotFoundException();
        }

        const babies: Baby[] = []

        for(const b of user.babies){
            const baby = await this.babyRepository.findById(b.id)
            babies.push(baby)
        }

        await this.babyRepository.update({
            ...babies,
            name: input.name,
            birthDate: input.birthDate,
            gender: input.gender,
            
        })
        
        
        return 
    }
}