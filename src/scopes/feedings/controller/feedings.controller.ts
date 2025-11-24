import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateFeedingsUseCase } from "../usecase/create/createFeedings.usecase";
import { CreateFeedingsRequest } from "./transport/createFeedings.request";
import { GetFeedingsUseCase } from "../usecase/get/getFeedings.usecase";
import { FeedingsResponse } from "./transport/getFeedings.response";
import { UpdateFeedingsRequest } from "./transport/updateFedings.request";
import { UpdateFeedingsUseCase } from "../usecase/update/updateFeedings.usecase";

@Controller('v1/feedings')
export class FeedingsController {
    constructor(
        private readonly createFeedingsUseCase: CreateFeedingsUseCase,
        private readonly getFeedingsUseCase: GetFeedingsUseCase,
        private readonly updateFedingsUseCase: UpdateFeedingsUseCase
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

    @Put('/update/:babyId/:feedingsId')
    @HttpCode(HttpStatus.OK)
    async updateFedings(
        @Body() request: UpdateFeedingsRequest,
        @Param('babyId') babyId: string,
        @Param('feedingsId') feedingsId: string
    ) {
        return await this.updateFedingsUseCase.execute({
            babyId: babyId,
            feedingsId: feedingsId,
            type: request.type,
            volume: request.volume,
            startedAt: request.startedAt,
            endedAt: request.endedAt
        })
    }
}