import { Module } from "@nestjs/common";
import { NapsRepositoryModule } from "../../repository/naps.repository.module";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { CreateNapsUseCase } from "./createNaps.usecase";
import { CreateNapsValidator } from "./createNaps.validator";

@Module({
    imports:[NapsRepositoryModule, BabyRepositoryModule],
    providers: [CreateNapsUseCase, CreateNapsValidator],
    exports:[CreateNapsUseCase]
})

export class CreateNapsUseCaseModule{}