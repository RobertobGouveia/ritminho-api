import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { CreateFeedingsUseCaseInput } from "./createFeedings.usecase.input";
import { CreateFeedingsUseCaseOutput } from "./createFeedings.usecase.output";
import { Feedings } from "../../entity/feedings.entity";
import { FeedingsRepository } from "../../repository/feedings.repository";
import { BabyRepository } from "src/scopes/babies/repository";

@Injectable()
export class CreateFeedingsUseCase implements BaseUseCase<CreateFeedingsUseCaseInput, CreateFeedingsUseCaseOutput> {
    constructor(
        private readonly createFeedingsRepository: FeedingsRepository,
        private readonly babyRepository: BabyRepository
    ){}

    async execute(input?: CreateFeedingsUseCaseInput): Promise<CreateFeedingsUseCaseOutput> {

        const babyId = await this.babyRepository.findById(input.babyId)

        if (!babyId) {
           throw new NotFoundException(`There is no baby with the id: ${babyId.id}`)
        }

        const feedings = new Feedings();
        feedings.baby = babyId;
        feedings.type = input.type;
        feedings.volume = input.volume;
        feedings.startedAt = input.startedAt;
        feedings.endedAt = input.endedAt;


        const feedingsSave = await this.createFeedingsRepository.create(feedings)
        
        
        return feedingsSave;
    }
}