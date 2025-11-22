import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post } from "@nestjs/common";
import { CreateNapsRequest } from "./transport/createNapsRequest";
import { CreateNapsUseCase } from "../usecase/create/createNaps.usecase";
import { NapsReponse } from "./transport/getNapsReponse";
import { GetNapsUseCase } from "../usecase/get/getNaps.usecase";

@Controller('v1/naps')
export class NapsController {
    constructor(
        private readonly createNapsUseCase: CreateNapsUseCase,
        private readonly getNapsUseCase: GetNapsUseCase
    ){}

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async createNaps (
        @Body() request: CreateNapsRequest
    ) {
        return this.createNapsUseCase.execute({
            babyId: request.babyId,
            naps: request.naps
        })
    }

    @Get(':babyId')
    @HttpCode(HttpStatus.OK)
    async getNaps (
        @Param('babyId') babyId: string
    ): Promise<NapsReponse[]>{
        return this.getNapsUseCase.execute({
            babyId: babyId
        })
    }
}