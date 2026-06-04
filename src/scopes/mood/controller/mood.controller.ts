import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateMoodUseCase } from "../usecase/create/createMood.usecase";
import { CreateMoodRequest } from "./transport/createMoodRequest";
import { GetFeedingsUseCase } from "src/scopes/feedings/usecase/get/getFeedings.usecase";
import { GetMoodUseCase } from "../usecase/get/getMood.usecase";
import { MoodResponse } from "./transport/getMoodResponse";
import { UpdateMoodRequest } from "./transport/updateMoodrequest";
import { UpdateMoodRequestParam } from "./transport/updateMoodParam.request";
import { UpdateMoodUseCase } from "../usecase/update/updateMood.usecase";
import { GetMoodRequest } from "./transport/getMood.request";

@Controller('v1/mood')
export class MoodController {
    constructor(
        private readonly createMoodUseCase: CreateMoodUseCase,
        private readonly getMoodUseCase: GetMoodUseCase,
        private readonly updateMoodUseCase: UpdateMoodUseCase
    ){}

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async createMood (
        @Body() request: CreateMoodRequest
    ){
        return this.createMoodUseCase.execute({
            babyId: request.babyId,
            mood: request.mood
        })
    }

    @Get(':babyId')
    @HttpCode(HttpStatus.OK)
    async getMood (
        @Param() babyId: GetMoodRequest
    ): Promise<MoodResponse[]> {
        return this.getMoodUseCase.execute({
            babyId: babyId.babyId
        })
    }

    @Put('/update/:babyId/:moodId')
    @HttpCode(HttpStatus.OK)
    async updateMood (
        @Param() params: UpdateMoodRequestParam,
        @Body() request: UpdateMoodRequest
    ) {
        return this.updateMoodUseCase.execute({
            babyId: params.babyId,
            moodId: params.moodId,
            mood: request.mood
        })
    }
}