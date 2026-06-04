import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { NapsRepositoryModule } from "../../repository/naps.repository.module";
import { GetNapsUseCase } from "./getNaps.usecase";

@Module({
    imports: [BabyRepositoryModule, NapsRepositoryModule],
    providers: [GetNapsUseCase],
    exports: [GetNapsUseCase]
})

export class GetNapsModule{}