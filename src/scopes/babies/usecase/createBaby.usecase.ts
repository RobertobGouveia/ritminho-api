import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { CreateBabyUseCaseInput } from "./createBaby.usecase.input";
import { CreateBabyUseCaseOutput } from "./createBaby.usecase.output";
import CreateBabyValidator from "./createBaby.validator";
import { Baby } from "../entity/babies.entity";
import { BabyRepository } from "../repository/baby.repository";
import { Injectable } from "@nestjs/common";
import { UserRepository } from "src/scopes/users/repository";

@Injectable()
export default class CreateBabyUseCase implements BaseUseCase<CreateBabyUseCaseInput, CreateBabyUseCaseOutput>{
    constructor(
        private readonly validator: CreateBabyValidator,
        private readonly babyRepository: BabyRepository,
        private readonly userRepository: UserRepository
    ){}

    async execute(input?: CreateBabyUseCaseInput): Promise<CreateBabyUseCaseOutput> {
        await this.validator.validate(input)

        const user = await this.userRepository.findById(input.userId)

        const babies: Baby[] = [];

        for(const babyData of input.babies) {

            const baby = new Baby();
            baby.name = babyData.name;
            baby.birthDate = babyData.birthDate;
            baby.gender = babyData.gender;
            baby.user = user;

            babies.push(baby)
        }
        

        const savedBabies = await this.babyRepository.create(babies)

        return { ids: savedBabies.map(babyId => babyId.id) }
    }
}