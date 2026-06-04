import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { DiaperChangesRepositoryModule } from "../../repository/diaperChanges.repository.module";
import { GetDiaperChangesUseCase } from "./getDiaperChanges.usecase";

@Module({
    imports: [BabyRepositoryModule, DiaperChangesRepositoryModule],
    providers: [GetDiaperChangesUseCase],
    exports: [GetDiaperChangesUseCase]
})

export class GetDiaperChangesModule{}