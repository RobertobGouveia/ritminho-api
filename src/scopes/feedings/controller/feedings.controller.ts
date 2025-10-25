import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateFeedingsUseCase } from "../usecase/create/createFeedings.usecase";
import { CreateFeedingsRequest } from "./transport/createFeedingsRequest";

@Controller('v1/feedings')
export class FeedingsController {
    constructor(
        private readonly createFeedingsUseCase: CreateFeedingsUseCase
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
}