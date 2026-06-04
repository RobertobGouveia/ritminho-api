import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { UpdateActivitiesUseCaseInput } from "./updateactivities.usecase.input";
import { UpdateActivitiesUseCaseOutput } from "./updateActivities.usecase.output";
import { BabyRepository } from "src/scopes/babies/repository";
import { ActivitiesRepository } from "../../repository/activities.repository";

@Injectable ()
export class UpdateActivitiesUseCase implements BaseUseCase<UpdateActivitiesUseCaseInput, UpdateActivitiesUseCaseOutput>{
    constructor(
        private readonly babyRepository: BabyRepository,
        private readonly activitiesRepository: ActivitiesRepository
    ){}

    async execute(input?: UpdateActivitiesUseCaseInput): Promise<UpdateActivitiesUseCaseOutput> {

        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby){
            throw new NotFoundException(`Baby ${input.babyId} not found`)
        }

        const activity = await this.activitiesRepository.findByIdAndBabyId(input.activityId, input.babyId)

        const updatedActivity = await this.activitiesRepository.update({
            ...activity,
            type: input.type ?? activity.type,
            description: input.description ?? activity.description
        })

        return {
            activityId: updatedActivity.id,
            type: updatedActivity.type,
            description: updatedActivity.description
        }
    }
}   