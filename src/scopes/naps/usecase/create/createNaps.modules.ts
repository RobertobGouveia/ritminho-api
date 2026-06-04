import { Module } from "@nestjs/common";
import { NapsRepositoryModule } from "../../repository/naps.repository.module";
import { BabyRepositoryModule } from "src/scopes/babies/repository";
import { CreateNapsUseCase } from "./createNaps.usecase";

@Module({
    imports:[NapsRepositoryModule, BabyRepositoryModule],
    providers: [CreateNapsUseCase],
    exports:[CreateNapsUseCase]
})

export class CreateNapsUseCaseModule{}