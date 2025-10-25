import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { AuthRepository } from "../../repository";
import { RegisterAuthUseCaseInput } from "./registerAuth.usecase.input";
import { RegisterAuthUseCaseOutput } from "./registerAuth.usecase.output";
import { RegisterAuthValidator } from "./registerAuth.validator";
import AuthBuilder from "../../builders/auth.builder";
import CreateUserUseCase from "src/scopes/users/usecase/createUser.usecase";
import CreateBabyUseCase from "src/scopes/babies/usecase/createBaby.usecase";
import { Injectable } from "@nestjs/common";

@Injectable()
export default class RegisterAuthUsecase implements BaseUseCase<RegisterAuthUseCaseInput, RegisterAuthUseCaseOutput>{
    constructor(
        private readonly validator: RegisterAuthValidator,
        private readonly authRepository: AuthRepository,
        private readonly createUserUseCase: CreateUserUseCase,
        private readonly createBabyUseCase: CreateBabyUseCase
    ){}

    async execute(input?: RegisterAuthUseCaseInput): Promise<RegisterAuthUseCaseOutput> {
        await this.validator.validate(input);

        const authExists = await this.authRepository.findByEmail(input.email)
        if(authExists){
            console.log(`Email ${authExists.email} already exists.`)
        }
        
        const auth = await this.authRepository.create(
            AuthBuilder.buildAuthentitationAuth(
                input.email,
                input.password
            )
        )

        const user = await this.createUserUseCase.execute({
            authId: auth.id,
            name: input.user.name,
        })

        const createBabies = await this.createBabyUseCase.execute({
            userId: user.userId,
            babies: input.user.babies
        })
        
        return {
            authId: auth.id,
            userId: user.userId,
            babiesIds: createBabies.ids
        }
    }
}