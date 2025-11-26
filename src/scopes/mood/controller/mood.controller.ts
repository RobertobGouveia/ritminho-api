import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateMoodUseCase } from "../usecase/create/createMood.usecase";
import { CreateMoodRequest } from "./transport/createMoodRequest";
import { GetFeedingsUseCase } from "src/scopes/feedings/usecase/get/getFeedings.usecase";
import { GetMoodUseCase } from "../usecase/get/getMood.usecase";
import { MoodResponse } from "./transport/getMoodResponse";
import { UpdateMoodRequest } from "./transport/updateMoodrequest";
import { UpdateMoodUseCase } from "../usecase/update/updateMood.usecase";

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
        @Param('babyId') babyId: string
    ): Promise<MoodResponse[]> {
        return this.getMoodUseCase.execute({
            babyId: babyId
        })
    }

    @Put('/update/:babyId/:moodId')
    @HttpCode(HttpStatus.OK)
    async updateMood (
        @Param('babyId') babyId: string,
        @Param('moodId') moodId: string,
        @Body() request: UpdateMoodRequest
    ) {
        return this.updateMoodUseCase.execute({
            babyId: babyId,
            moodId: moodId,
            mood: request.mood
        })
    }
}