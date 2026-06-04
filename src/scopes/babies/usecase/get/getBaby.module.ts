import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "../../repository";
import GetBabyUseCase from "./getBaby.usecase";

@Module({
    imports: [BabyRepositoryModule],
    providers: [GetBabyUseCase],
    exports: [GetBabyUseCase] 
})

export default class GetBabyModule{}