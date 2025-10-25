import { Module } from "@nestjs/common";
import CreateBabyUseCase from "src/scopes/babies/usecase/createBaby.usecase";
import CreateUserUseCase from "src/scopes/users/usecase/createUser.usecase";
import { RegisterAuthValidator } from "./registerAuth.validator";
import { UserRepositoryModule } from "src/scopes/users/repository/user.repository.module";
import { AuthRepositoryModule } from "../../repository";
import RegisterAuthUsecase from "./registerAuth.usecase";
import CreateUserValidator from "src/scopes/users/usecase/createUser.validator";
import CreateBabyValidator from "src/scopes/babies/usecase/createBaby.validator";
import { BabyRepositoryModule } from "src/scopes/babies/repository";

@Module({
    imports: [ UserRepositoryModule, AuthRepositoryModule, BabyRepositoryModule ],
    providers: [
        RegisterAuthUsecase, 
        CreateUserUseCase, 
        RegisterAuthValidator, 
        CreateBabyUseCase, 
        CreateUserValidator,
        CreateBabyValidator
    ],
    exports: [CreateUserUseCase, RegisterAuthUsecase]
})

export class RegisterAuthModule{}