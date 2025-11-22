import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "../../repository";
import { UpdateBabyUseCase } from "./updateBaby.usecase";
import { UpdateBabyValidator } from "./updateBaby.validator";

@Module({
    imports: [BabyRepositoryModule],
    providers: [UpdateBabyUseCase, UpdateBabyValidator],
    exports: [UpdateBabyUseCase]
})

export class UpdateBabyModule{}