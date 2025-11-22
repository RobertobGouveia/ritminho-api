import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { DiaperChangesRepositoryModule } from "../../repository/diaperChanges.repository.module";
import { UpdateDiaperChangesUseCase } from "./updateDiaperChanges.usecase";
import { UpdateDiaperChangesValidator } from "./updateDiaperChanges.validator";

@Module({
    imports: [BabyRepositoryModule, DiaperChangesRepositoryModule],
    providers: [UpdateDiaperChangesUseCase, UpdateDiaperChangesValidator],
    exports: [UpdateDiaperChangesUseCase]
})

export class UpdateDiaperChangesModule{}