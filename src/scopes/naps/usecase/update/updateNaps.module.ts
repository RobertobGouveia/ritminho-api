import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { NapsRepositoryModule } from "../../repository/naps.repository.module";
import { UpdateNapsUseCase } from "./updateNaps.usecase";
import { UpdateNapsValidator } from "./updateNaps.validator";

@Module({
    imports: [BabyRepositoryModule, NapsRepositoryModule],
    providers: [UpdateNapsUseCase, UpdateNapsValidator],
    exports: [UpdateNapsUseCase]
})

export class UpdateNapsModule{}