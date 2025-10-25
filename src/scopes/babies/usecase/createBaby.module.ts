import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "../repository/baby.repository.module";
import CreateBabyUseCase from "./createBaby.usecase";
import CreateBabyValidator from "./createBaby.validator";
import { UserRepositoryModule } from "src/scopes/users/repository";

@Module({
    imports:[ BabyRepositoryModule, UserRepositoryModule ],
    providers: [CreateBabyUseCase, CreateBabyValidator],
    exports: [CreateBabyUseCase]
})

export class CreateBabyModule{}