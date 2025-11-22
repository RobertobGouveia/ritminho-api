import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { GetFeedingsUseCaseInput } from "./getFeedings.usecase.input";
import { GetFeedingsUseCaseOutput } from "./getFeedings.usecase.output";
import { GetFeedingsValidator } from "./getFeedings.validator";
import { BabyRepository } from "src/scopes/babies/repository";
import { FeedingsRepository } from "../../repository";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class GetFeedingsUseCase implements BaseUseCase<GetFeedingsUseCaseInput, GetFeedingsUseCaseOutput[]>{
    constructor(
        private readonly validator: GetFeedingsValidator,
        private readonly babyRepository: BabyRepository,
        private readonly feedingsRepository: FeedingsRepository
    ){}

    async execute(input?: GetFeedingsUseCaseInput): Promise<GetFeedingsUseCaseOutput[]> {
        await this.validator.validate(input)
        
        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
            console.log(`Baby ${input.babyId} not Found`)
            throw new NotFoundException();
        }

        const feedings = await this.feedingsRepository.findByBabyId(baby.id)
        if(!feedings){
            console.log('Feedings Not Found')
            throw new NotFoundException();
        }
        
        return feedings.map(feeding => ({
            startedAt: feeding.createdAt,
            endedAt: feeding.endedAt,
            type: feeding.type,
            volume: feeding.volume,
        }))
    }
}