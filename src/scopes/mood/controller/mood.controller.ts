import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { CreateMoodUseCase } from "../usecase/create/createMood.usecase";
import { CreateMoodRequest } from "./transport/createMoodRequest";
import { GetFeedingsUseCase } from "src/scopes/feedings/usecase/get/getFeedings.usecase";
import { GetMoodUseCase } from "../usecase/get/getMood.usecase";
import { MoodResponse } from "./transport/getMoodResponse";

@Controller('v1/mood')
export class MoodController {
    constructor(
        private readonly createMoodUseCase: CreateMoodUseCase,
        private readonly getMoodUseCase: GetMoodUseCase
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
        @Param('babyId') babyId: string
    ): Promise<MoodResponse[]> {
        return this.getMoodUseCase.execute({
            babyId: babyId
        })
    }
}