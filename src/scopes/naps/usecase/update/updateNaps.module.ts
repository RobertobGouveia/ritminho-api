import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { NapsRepositoryModule } from "../../repository/naps.repository.module";
import { UpdateNapsUseCase } from "./updateNaps.usecase";

@Module({
    imports: [BabyRepositoryModule, NapsRepositoryModule],
    providers: [UpdateNapsUseCase],
    exports: [UpdateNapsUseCase]
})

export class UpdateNapsModule{}