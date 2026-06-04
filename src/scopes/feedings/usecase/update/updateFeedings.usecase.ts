import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { UpdateFeedingsUseCaseInput } from "./updateFeedings.usecase.input";
import { UpdateFeedingsUseCaseOutput } from "./updateFeedings.usecase.output";
import { BabyRepository } from "src/scopes/babies/repository";
import { FeedingsRepository } from "src/scopes/feedings/repository";

@Injectable()
export class UpdateFeedingsUseCase implements BaseUseCase<UpdateFeedingsUseCaseInput, UpdateFeedingsUseCaseOutput>{
    constructor(
        private readonly babyRepository: BabyRepository,
        private readonly feedingsRepository: FeedingsRepository
    ){}

    async execute(input?: UpdateFeedingsUseCaseInput): Promise<UpdateFeedingsUseCaseOutput> {

        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
            throw new NotFoundException(`Baby ${input.babyId} not found`)
        }

        const feedings = await this.feedingsRepository.findByIdAndBabyId(input.feedingsId, input.babyId)

        const updatedFeedings = await this.feedingsRepository.update({
            ...feedings,
            type: input.type ?? feedings.type,
            volume: input.volume ?? feedings.volume,
            startedAt: input.startedAt ?? feedings.startedAt,
            endedAt: input.endedAt ?? feedings.endedAt
        })

        return {
            feedingsId: updatedFeedings.id,
            volume: updatedFeedings.volume,
            type: updatedFeedings.type,
            startedAt: updatedFeedings.startedAt,
            endedAt: updatedFeedings.endedAt
        }
    }
}