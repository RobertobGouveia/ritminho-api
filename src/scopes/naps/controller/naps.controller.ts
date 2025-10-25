import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { CreateNapsRequest } from "./transport/createNapsRequest";
import { CreateNapsUseCase } from "../usecase/create/createNaps.usecase";

@Controller('v1/naps')
export class NapsController {
    constructor(
        private readonly createNapsUseCase: CreateNapsUseCase
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
}