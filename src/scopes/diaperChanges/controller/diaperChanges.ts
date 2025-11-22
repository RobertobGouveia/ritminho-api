import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateDiaperChangesUseCase } from "../usecase/create/createDiaperChanges.usecase";
import { CreateDiaperChangesRequest } from "./transport/createDiaperChangesRequest";
import { DiaperChangesResponse } from "./transport/getDiaperChangesResponse";
import { GetDiaperChangesUseCase } from "../usecase/get/getDiaperChanges.usecase";
import { UpdateDiaperChangesRequest } from "./transport/updateDiaperChanges.request";
import { UpdateDiaperChangesUseCase } from "../usecase/update/updateDiaperChanges.usecase";

@Controller('v1/diaper-changes')
export class DiaperChangesController {
    constructor(
        private readonly createDiaperChangesUseCase: CreateDiaperChangesUseCase,
        private readonly getDiaperChangesUseCase: GetDiaperChangesUseCase,
        private readonly updateDiaperChangesUseCase: UpdateDiaperChangesUseCase
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

    @Put('/update/:babyId/:diaperId')
    @HttpCode(HttpStatus.OK)
    async updateDiaperChanges (
        @Body() request: UpdateDiaperChangesRequest,
        @Param('babyId') babyId: string,
        @Param('diaperId') diaperId: string
    ) {
        return await this.updateDiaperChangesUseCase.execute({
            babyId: babyId,
            diaperId: diaperId,
            type: request.type,
            details: request.details
        })
    }
}