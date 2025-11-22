import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { DiaperChangesRepositoryModule } from "../../repository/diaperChanges.repository.module";
import { GetDiaperChangesUseCase } from "./getDiaperChanges.usecase";
import { GetDiaperChangesValidator } from "./getDiaperChanges.validator";

@Module({
    imports: [BabyRepositoryModule, DiaperChangesRepositoryModule],
    providers: [GetDiaperChangesUseCase, GetDiaperChangesValidator],
    exports: [GetDiaperChangesUseCase]
})

export class GetDiaperChangesModule{}