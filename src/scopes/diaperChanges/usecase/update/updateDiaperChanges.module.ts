import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { DiaperChangesRepositoryModule } from "../../repository/diaperChanges.repository.module";
import { UpdateDiaperChangesUseCase } from "./updateDiaperChanges.usecase";

@Module({
    imports: [BabyRepositoryModule, DiaperChangesRepositoryModule],
    providers: [UpdateDiaperChangesUseCase],
    exports: [UpdateDiaperChangesUseCase]
})

export class UpdateDiaperChangesModule{}