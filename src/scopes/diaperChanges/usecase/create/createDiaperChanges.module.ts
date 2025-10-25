import { Module } from "@nestjs/common";
import { DiaperChangesTypeOrmRepository } from "../../repository/diaperChanges.typeorm.repository";
import { DiaperChangesRepository } from "../../repository/diaperChanges.repository";
import { CreateDiaperChangesUseCase } from "./createDiaperChanges.usecase";
import { CreateDiaperChangesValidator } from "./createDiaperChanges.validator";
import { DiaperChangesRepositoryModule } from "../../repository/diaperChanges.repository.module";
import { BabyRepositoryModule } from "src/scopes/babies/repository";

@Module({
    imports:[DiaperChangesRepositoryModule, BabyRepositoryModule],
    providers: [CreateDiaperChangesUseCase, CreateDiaperChangesValidator],
    exports: [CreateDiaperChangesUseCase]
})

export class DiaperChangesUseCaseModule{}