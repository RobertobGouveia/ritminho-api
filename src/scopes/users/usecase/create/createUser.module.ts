import { Module } from "@nestjs/common";
import { AuthRepositoryModule } from "src/scopes/auth/repository";
import { UserRepositoryModule } from "../../repository";
import CreateUserUseCase from "./createUser.usecase";
import CreateUserValidator from "./createUser.validator";

@Module({
    imports: [ UserRepositoryModule, AuthRepositoryModule ],
    providers: [CreateUserUseCase, CreateUserValidator],
    exports: [CreateUserUseCase]
})

export class CreateUserModule{}