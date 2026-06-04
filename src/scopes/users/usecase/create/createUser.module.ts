import { Module } from "@nestjs/common";
import { AuthRepositoryModule } from "src/scopes/auth/repository";
import { UserRepositoryModule } from "../../repository";
import CreateUserUseCase from "./createUser.usecase";

@Module({
    imports: [ UserRepositoryModule, AuthRepositoryModule ],
    providers: [CreateUserUseCase],
    exports: [CreateUserUseCase]
})

export class CreateUserModule{}