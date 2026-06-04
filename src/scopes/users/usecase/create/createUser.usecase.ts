import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { CreateUserUseCaseInput } from "./createUser.usecase.input";
import { CreateUserUseCaseOutput } from "./createUser.usecase.output";
import { User } from "../../entity/user.entity";
import { UserRepository } from "../../repository/user.repository";
import { Injectable } from "@nestjs/common";
import { AuthRepository } from "src/scopes/auth/repository";

@Injectable()
export default class CreateUserUseCase implements BaseUseCase<CreateUserUseCaseInput, CreateUserUseCaseOutput> {
    constructor(
        private readonly userRepository: UserRepository,
        private readonly authRepository: AuthRepository
    ){}

    async execute(input?: CreateUserUseCaseInput): Promise<CreateUserUseCaseOutput> {

        const auth = await this.authRepository.findById(input.authId)

        if(auth.user){
            throw new Error(`Auth with email ${auth.email} already has a user associated.`)
        }

        const user = new User();
        user.name = input.name;
        user.auth = auth

        const userSaved = await this.userRepository.create(user)
        
        return { userId: userSaved.id }
    }
}