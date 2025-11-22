import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { CreateFeedingsUseCase } from "../usecase/create/createFeedings.usecase";
import { CreateFeedingsRequest } from "./transport/createFeedingsRequest";
import { GetFeedingsUseCase } from "../usecase/get/getFeedings.usecase";
import { FeedingsResponse } from "./transport/getFeedingsResponse";

@Controller('v1/feedings')
export class FeedingsController {
    constructor(
        private readonly createFeedingsUseCase: CreateFeedingsUseCase,
        private readonly getFeedingsUseCase: GetFeedingsUseCase
    ){}

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async createFeedings(
        @Body() request: CreateFeedingsRequest
    ){
        return this.createFeedingsUseCase.execute({
            babyId: request.babyId,
            type: request.type,
            volume: request.volume,
            startedAt: request.startedAt,
            endedAt: request.endedAt
        })
    }

    @Get(':babyId')
    @HttpCode(HttpStatus.OK)
    async getFeedings(
        @Param('babyId') babyId: string
    ): Promise<FeedingsResponse[]>{
        return await this.getFeedingsUseCase.execute({
            babyId: babyId
        })
    }
}