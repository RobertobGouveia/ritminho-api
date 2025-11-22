import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { GetNapsUseCaseInput } from "./getNaps.usecase.input";
import { GetNapsUseCaseOutput } from "./getNaps.usecase.output";
import { GetNapsvalidator } from "./getNaps.validator";
import { BabyRepository } from "src/scopes/babies/repository";
import { NapsRepository } from "../../repository/naps.repository";

@Injectable()
export class GetNapsUseCase implements BaseUseCase<GetNapsUseCaseInput, GetNapsUseCaseOutput[]>{
    constructor(
        private readonly validator: GetNapsvalidator,
        private readonly babyRepository: BabyRepository,
        private readonly napsRepository: NapsRepository
    ){}

    async execute(input?: GetNapsUseCaseInput): Promise<GetNapsUseCaseOutput[]> {
        await this.validator.validate(input)

        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
            console.log(`baby ${input.babyId} not found`)
            throw new NotFoundException();
        }

        const naps = await this.napsRepository.findByBabyId(baby.id)
        
        return naps.map(nap => ({
            naps: {
                startedAt: nap.startedAt,
                endedAt: nap.endedAt
            }
        }))
    }
}