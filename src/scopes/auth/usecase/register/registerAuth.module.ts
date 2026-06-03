import { Module } from "@nestjs/common";
import CreateUserUseCase from "src/scopes/users/usecase/create/createUser.usecase";
import { RegisterAuthValidator } from "./registerAuth.validator";
import { UserRepositoryModule } from "src/scopes/users/repository/user.repository.module";
import { AuthRepositoryModule } from "../../repository";
import RegisterAuthUsecase from "./registerAuth.usecase";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import CreateBabyValidator from "src/scopes/babies/usecase/create/createBaby.validator";
import { CreateUserModule } from "src/scopes/users/usecase/create/createUser.module";
import { CreateBabyModule } from "src/scopes/babies/usecase/create/createBaby.module";

@Module({
    imports: [ UserRepositoryModule, AuthRepositoryModule, BabyRepositoryModule, CreateUserModule, CreateBabyModule],
    providers: [
        RegisterAuthUsecase, 
        CreateUserUseCase, 
        RegisterAuthValidator, 
        CreateBabyValidator
    ],
    exports: [CreateUserUseCase, RegisterAuthUsecase]
})

export class RegisterAuthModule{}