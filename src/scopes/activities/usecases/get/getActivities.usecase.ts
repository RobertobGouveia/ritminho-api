import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { GetActivitiesUseCaseInput } from "./getActivities.usecase.input";
import { GetActivitiesUseCaseOutput } from "./getActivities.usecase.output";
import { GetActivitiesValidador } from "./getActivities.validator";
import { BabyRepository } from "src/scopes/babies/repository";
import { ActivitiesRepository } from "../../repository/activities.repository";

@Injectable()
export class GetActivitiesUseCase implements BaseUseCase<GetActivitiesUseCaseInput, GetActivitiesUseCaseOutput[]>{
    constructor(
        private readonly validator: GetActivitiesValidador,
        private readonly babyRepository: BabyRepository,
        private readonly activitiesRepository: ActivitiesRepository
    ){}

    async execute(input?: GetActivitiesUseCaseInput): Promise<GetActivitiesUseCaseOutput[]> {
        await this.validator.validate(input)

        const baby = await this.babyRepository.findById(input.babyId)
        if(!baby){
            throw new NotFoundException(`Baby ${input.babyId} not found`)
        }

        const activities = await this.activitiesRepository.findByBabyId(baby.id)

        return activities.map(a => ({
            activities: {
                id: a.id,
                type: a.type,
                description: a.description  
            }
        }))
    }
}