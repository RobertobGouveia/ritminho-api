import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateActivitesUseCase } from "../usecases/create/createActivities.usecase";
import { CreateActivitiesRequest } from "./transport/createActivities.request";
import { GetActivitiesResponse } from "./transport/getActivities.response";
import { GetActivitiesUseCase } from "../usecases/get/getActivities.usecase";
import { UpdateActivitiesRequest } from "./transport/updateActivities.request";
import { UpdateActivitiesRequestParam } from "./transport/updateActivitiesParam.request";
import { UpdateActivitiesUseCase } from "../usecases/update/updateActivities.usecase";
import { GetActivitiesRequest } from "./transport/getActivities.request";

@Controller('v1/activities')
export class ActivitiesController {
    constructor(
        private readonly createActivitiesUseCase: CreateActivitesUseCase,
        private readonly getActivitiesUseCase: GetActivitiesUseCase,
        private readonly updateActivitiesUseCase: UpdateActivitiesUseCase
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

    @Get(':babyId')
    @HttpCode(HttpStatus.OK)
    async getActivities (
        @Param() babyId: GetActivitiesRequest
    ): Promise<GetActivitiesResponse[]> {
        return this.getActivitiesUseCase.execute({
            babyId: babyId.babyId
        })
    }

    @Put('/update/:babyId/:activityId')
    @HttpCode(HttpStatus.OK)
    async updateActivities(
        @Param() params: UpdateActivitiesRequestParam,
        @Body() request: UpdateActivitiesRequest
    ) {
        return this.updateActivitiesUseCase.execute({
            babyId: params.babyId,
            activityId: params.activityId,
            type: request.type,
            description: request.description
        })
    }
}