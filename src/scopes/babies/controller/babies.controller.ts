import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import CreateBabyUseCase from "../usecase/createBaby.usecase";
import { CreateBabyRequest } from "./transport/createBaby.request";
import { CreateActivitiesUseCaseOutput } from "src/scopes/activities/usecases/create/createActivities.usecase.output";

@Controller('v1/baby')
export class BabyController {
    constructor(
        private readonly createBabyUseCase: CreateBabyUseCase
    ){}

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async createBaby (
        @Body() request: CreateBabyRequest
    ) {
        return this.createBabyUseCase.execute({
            userId: request.userId,
            babies: request.babies
        })
    }
}