import { Module } from "@nestjs/common";
import CreateUserUseCase from "./createUser.usecase";
import { UserRepositoryModule } from "../repository/user.repository.module";
import CreateUserValidator from "./createUser.validator";
import { AuthRepositoryModule } from "src/scopes/auth/repository";

@Module({
    imports: [ UserRepositoryModule, AuthRepositoryModule ],
    providers: [CreateUserUseCase, CreateUserValidator],
    exports: [CreateUserUseCase]
})

export class CreateUserModule{}