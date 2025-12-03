import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put } from "@nestjs/common";
import { CreateNapsRequest } from "./transport/createNapsRequest";
import { CreateNapsUseCase } from "../usecase/create/createNaps.usecase";
import { NapsReponse } from "./transport/getNapsReponse";
import { GetNapsUseCase } from "../usecase/get/getNaps.usecase";
import { UpdateNapsRequest } from "./transport/updateNapsRequest";
import { UpdateNapsUseCase } from "../usecase/update/updateNaps.usecase";

@Controller('v1/naps')
export class NapsController {
    constructor(
        private readonly createNapsUseCase: CreateNapsUseCase,
        private readonly getNapsUseCase: GetNapsUseCase,
        private readonly updateNapsUseCase: UpdateNapsUseCase
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

    @Put('/update/:babyId/:napId')
    @HttpCode(HttpStatus.OK)
    async updateNaps(
        @Param('babyId') babyId: string,
        @Param('napId') napId: string,
        @Body() request: UpdateNapsRequest
    ){
        return this.updateNapsUseCase.execute({
            babyId: babyId,
            napId: napId,
            startedAt: request.startedAt,
            endedAt: request.endedAt
        })
    }
}