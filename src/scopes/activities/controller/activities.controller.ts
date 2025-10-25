import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateActivitesUseCase } from "../usecases/create/createActivities.usecase";
import { CreateActivitiesRequest } from "./transport/createActivitiesRequest";

@Controller('v1/activities')
export class ActivitiesController {
    constructor(
        private readonly createActivitiesUseCase: CreateActivitesUseCase
    ){}

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async createActivities (
        @Body() request: CreateActivitiesRequest
    ) {
        return this.createActivitiesUseCase.execute({
            babyId: request.babyId,
            activities: request.activities
        })
    }
}