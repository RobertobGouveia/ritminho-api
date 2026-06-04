import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { GetFeedingsUseCaseInput } from "./getFeedings.usecase.input";
import { GetFeedingsUseCaseOutput } from "./getFeedings.usecase.output";
import { BabyRepository } from "src/scopes/babies/repository";
import { FeedingsRepository } from "../../repository";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class GetFeedingsUseCase implements BaseUseCase<GetFeedingsUseCaseInput, GetFeedingsUseCaseOutput[]>{
    constructor(
        private readonly babyRepository: BabyRepository,
        private readonly feedingsRepository: FeedingsRepository
    ){}

    async execute(input?: GetFeedingsUseCaseInput): Promise<GetFeedingsUseCaseOutput[]> {
        
        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
            throw new NotFoundException(`Baby ${input.babyId} not Found`);
        }

        const feedings = await this.feedingsRepository.findByBabyId(baby.id)
        if(!feedings){
            throw new NotFoundException('Feedings Not Found');
        }
        
        return feedings.map(feeding => ({
            startedAt: feeding.createdAt,
            endedAt: feeding.endedAt,
            type: feeding.type,
            volume: feeding.volume,
        }))
    }
}