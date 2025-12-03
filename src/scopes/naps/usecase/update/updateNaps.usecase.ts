import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { UpdateNapsUseCaseInput } from "./updateNaps.usecase.input";
import { UpdateNapsUseCaseOutput } from "./updateNaps.usecase.output";
import { UpdateNapsValidator } from "./updateNaps.validator";
import { BabyRepository } from "src/scopes/babies/repository";
import { NapsRepository } from "../../repository/naps.repository";

@Injectable()
export class UpdateNapsUseCase implements BaseUseCase<UpdateNapsUseCaseInput, UpdateNapsUseCaseOutput>{
    constructor(
        private readonly validator: UpdateNapsValidator,
        private readonly babyRepository: BabyRepository,
        private readonly napsRepository: NapsRepository
    ){}

    async execute(input?: UpdateNapsUseCaseInput): Promise<UpdateNapsUseCaseOutput> {
        await this.validator.validate(input)
        
        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
            throw new NotFoundException(`Baby ${input.babyId} not found`)
        }

        const naps = await this.napsRepository.findByNapsIdAndBabyId(input.napId, input.babyId)

        const updatedNaps = await this.napsRepository.update({
            ...naps,
            startedAt: input.startedAt ?? naps.startedAt,
            endedAt: input.endedAt ?? naps.endedAt
        })

        return {
            napId: updatedNaps.id,
            startedAt: updatedNaps.startedAt,
            endedAt: updatedNaps.endedAt
        }
    }
}