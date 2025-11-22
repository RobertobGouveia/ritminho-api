import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "../../repository";
import GetBabyUseCase from "./getBaby.usecase";
import { GetBabyValidator } from "./getBaby.validator";

@Module({
    imports: [BabyRepositoryModule],
    providers: [GetBabyUseCase, GetBabyValidator],
    exports: [GetBabyUseCase] 
})

export default class GetBabyModule{}