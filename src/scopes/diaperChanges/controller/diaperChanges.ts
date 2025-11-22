import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { CreateDiaperChangesUseCase } from "../usecase/create/createDiaperChanges.usecase";
import { CreateDiaperChangesRequest } from "./transport/createDiaperChangesRequest";
import { DiaperChangesResponse } from "./transport/getDiaperChangesResponse";
import { GetDiaperChangesUseCase } from "../usecase/get/getDiaperChanges.usecase";

@Controller('v1/diaper-changes')
export class DiaperChangesController {
    constructor(
        private readonly createDiaperChangesUseCase: CreateDiaperChangesUseCase,
        private readonly getDiaperChangesUseCase: GetDiaperChangesUseCase
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

    @Get(':babyId')
    @HttpCode(HttpStatus.OK)
    async getDiaperChanges (
        @Param('babyId') babyId: string
    ): Promise<DiaperChangesResponse[]> {
        return await this.getDiaperChangesUseCase.execute({
            babyId: babyId
        })
    }
}