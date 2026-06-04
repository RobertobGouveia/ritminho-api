import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "../../repository";
import { UpdateBabyUseCase } from "./updateBaby.usecase";

@Module({
    imports: [BabyRepositoryModule],
    providers: [UpdateBabyUseCase],
    exports: [UpdateBabyUseCase]
})

export class UpdateBabyModule{}