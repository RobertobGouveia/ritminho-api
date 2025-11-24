import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { UpdateFeedingsUseCaseInput } from "./updateFeedings.usecase.input";
import { UpdateFeedingsUseCaseOutput } from "./updateFeedings.usecase.output";
import { UpdateFeedingsValidator } from "./updateFeedings.validator";
import { BabyRepository } from "src/scopes/babies/repository";
import { FeedingsRepository } from "src/scopes/feedings/repository";

@Injectable()
export class UpdateFeedingsUseCase implements BaseUseCase<UpdateFeedingsUseCaseInput, UpdateFeedingsUseCaseOutput>{
    constructor(
        private readonly validador: UpdateFeedingsValidator,
        private readonly babyRepository: BabyRepository,
    ){}

    async execute(input?: UpdateFeedingsUseCaseInput): Promise<UpdateFeedingsUseCaseOutput> {
        await this.validador.validate(input)

        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
            throw new NotFoundException(`Baby ${input.babyId} not found`)
        }

        const feedings = baby.feedings.find(f => f.id === input.feedingsId)

        feedings.type = input.type ?? feedings.type;
        feedings.volume = input.volume ?? feedings.volume;
        feedings.startedAt = input.startedAt ?? feedings.startedAt;
        feedings.endedAt = input.endedAt ?? feedings.endedAt;

        await this.babyRepository.update(baby)
        
        return {
            type: feedings.type,
            volume: feedings.volume,
            startedAt: feedings.startedAt,
            endedAt: feedings.endedAt
        } 
    }
}