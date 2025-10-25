import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { CreateUserUseCaseInput } from "./createUser.usecase.input";
import { CreateUserUseCaseOutput } from "./createUser.usecase.output";
import CreateUserValidator from "./createUser.validator";
import { User } from "../entity/user.entity";
import { UserRepository } from "../repository/user.repository";
import { Injectable } from "@nestjs/common";
import { AuthRepository } from "src/scopes/auth/repository";

@Injectable()
export default class CreateUserUseCase implements BaseUseCase<CreateUserUseCaseInput, CreateUserUseCaseOutput> {
    constructor(
        private readonly validator: CreateUserValidator,
        private readonly userRepository: UserRepository,
        private readonly authRepository: AuthRepository
    ){}

    async execute(input?: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput> {
        this.validator.validate(input);

        const auth = await this.authRepository.findById(input.authId)

        const user = new User();
        user.name = input.name;
        user.auth = auth

        const userSaved = await this.userRepository.create(user)
        
        return { userId: userSaved.id }
    }
}