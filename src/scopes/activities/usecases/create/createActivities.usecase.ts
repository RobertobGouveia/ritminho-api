import { Injectable, NotFoundException } from "@nestjs/common";
import BaseUseCase from "src/infrastructure/usecase/baseUseCase";
import { CreateActivitiesUseCaseInput } from "./createActivities.usecase.input";
import { CreateActivitiesUseCaseOutput } from "./createActivities.usecase.output";
import { BabyRepository } from "src/scopes/babies/repository";
import { Activities } from "../../entities/activities.entity";
import { ActivitiesRepository } from "../../repository/activities.repository";

@Injectable()
export class CreateActivitesUseCase implements BaseUseCase<CreateActivitiesUseCaseInput, CreateActivitiesUseCaseOutput>{
    constructor(
        private readonly babyRepository: BabyRepository,
        private readonly activitiesRepository: ActivitiesRepository
    )
    {}

    async execute(input?: CreateActivitiesUseCaseInput): Promise<CreateActivitiesUseCaseOutput> {

        const baby = await this.babyRepository.findById(input.babyId)

        if(!baby) {
           throw new NotFoundException(`There is no baby with the id: ${input.babyId}`)
        }
        
        const activities: Activities[] = [];

        for(const activitiesData of input.activities){

            const newActivities = new Activities();
            newActivities.description = activitiesData.description;
            newActivities.type = activitiesData.type;
            newActivities.baby = baby;

            activities.push(newActivities)
        }

        const activitiesSaved = await this.activitiesRepository.create(activities)
        
        
        return { activitiesIds: activitiesSaved.map(activities => activities.id) } 
    }
}