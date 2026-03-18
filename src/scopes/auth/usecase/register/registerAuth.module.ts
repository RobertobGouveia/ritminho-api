import { Module } from "@nestjs/common";
import CreateBabyUseCase from "src/scopes/babies/usecase/create/createBaby.usecase";
import CreateUserUseCase from "src/scopes/users/usecase/create/createUser.usecase";
import { RegisterAuthValidator } from "./registerAuth.validator";
import { UserRepositoryModule } from "src/scopes/users/repository/user.repository.module";
import { AuthRepositoryModule } from "../../repository";
import RegisterAuthUsecase from "./registerAuth.usecase";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import CreateBabyValidator from "src/scopes/babies/usecase/create/createBaby.validator";
import CreateUserValidator from "src/scopes/users/usecase/create/createUser.validator";
import { CreateUserModule } from "src/scopes/users/usecase/create/createUser.module";

@Module({
    imports: [ UserRepositoryModule, AuthRepositoryModule, BabyRepositoryModule, CreateUserModule ],
    providers: [
        RegisterAuthUsecase, 
        CreateUserUseCase, 
        RegisterAuthValidator, 
        CreateBabyUseCase,
        CreateBabyValidator
    ],
    exports: [CreateUserUseCase, RegisterAuthUsecase]
})

export class RegisterAuthModule{}