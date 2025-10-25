import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateDiaperChangesUseCase } from "../usecase/create/createDiaperChanges.usecase";
import { CreateDiaperChangesRequest } from "./transport/createDiaperChangesRequest";

@Controller('v1/diaper-changes')
export class DiaperChangesController {
    constructor(
        private readonly createDiaperChangesUseCase: CreateDiaperChangesUseCase
    ){}

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async createDiaperChanges (
        @Body() request: CreateDiaperChangesRequest
    ) {
        return await this.createDiaperChangesUseCase.execute({
            babyId: request.babyId,
            type: request.type,
            details: request.details
        })
    }
}