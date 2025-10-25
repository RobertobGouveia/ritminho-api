import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateMoodUseCase } from "../usecase/create/createMood.usecase";
import { CreateMoodRequest } from "./transport/createMoodRequest";

@Controller('v1/mood')
export class MoodController {
    constructor(
        private readonly createMoodUseCase: CreateMoodUseCase
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
}