import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { CreateNapsUseCaseInput } from "./createNaps.usecase.input";
import { CreateNapsUseCaseOutput } from "./createNaps.usecase.output";
import { BabyRepository } from "src/scopes/babies/repository";
import { Naps } from "../../entities/naps.entity";
import { NapsRepository } from "../../repository/naps.repository";

@Injectable()
export class CreateNapsUseCase implements BaseUseCase<CreateNapsUseCaseInput, CreateNapsUseCaseOutput> {
    constructor(
        private readonly babyRepository: BabyRepository,
        private readonly napsRepository: NapsRepository
    ){}

    async execute(input?: CreateNapsUseCaseInput): Promise<CreateNapsUseCaseOutput> {

        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
           throw new NotFoundException(`There is no baby with the id: ${baby.id}`)
        }

        const naps: Naps[] = [];

        for(const napsData of input.naps){
            const newsNaps = new Naps();
            newsNaps.startedAt = napsData.startedAt,
            newsNaps.endedAt = napsData.endedAt,
            newsNaps.baby = baby

            naps.push(newsNaps)
        }

        const napsSaved = await this.napsRepository.create(naps)

        return napsSaved
    }
}