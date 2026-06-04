import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Put, UseGuards } from "@nestjs/common";
import CreateBabyUseCase from "../usecase/create/createBaby.usecase";
import { CreateBabyRequest } from "./transport/createBaby.request";
import { GetBabyResponse } from "./transport/getBabyResponse";
import GetBabyUseCase from "../usecase/get/getBaby.usecase";
import { UpdateBabyRequest } from "./transport/updateBabyRequest";
import { UpdateBabyUseCase } from "../usecase/update/updateBaby.usecase";
import { JwtGuard } from "src/infrastructure/authentication/jwt.guard";
import { GetBabyRequest } from "./transport/getBaby.request";
import { UpdateBabyRequestParam } from "./transport/updateBabyParam.request";

//@UseGuards(JwtGuard)
@Controller('v1/baby')
export class BabyController {
    constructor(
        private readonly createBabyUseCase: CreateBabyUseCase,
        private readonly getBabyUseCase: GetBabyUseCase,
        private readonly updateBabyUsCase: UpdateBabyUseCase
    ){}

    @Post('/create')
    @HttpCode(HttpStatus.CREATED)
    async createBaby (
        @Body() request: CreateBabyRequest
    ) {
        const result = await this.createBabyUseCase.execute({
            userId: request.userId,
            babies: request.babies
        })
        return result;
    }

    @Get(':babyId')
    @HttpCode(HttpStatus.OK)
    async getBaby (
        @Param() babyId: GetBabyRequest
    ) : Promise<GetBabyResponse>{
        const result =  await this.getBabyUseCase.execute({
            babyId: babyId.babyId
        })

        return {
            name: result.name,
            birthDate: result.birthDate,
            gender: result.gender,
            activities: result.activities,
            diaperChanges: result.diaperChanges,
            feedings: result.feedings,
            mood: result.mood,
            naps: result.naps,
            user: result.user,
            currentLength: result.currentLength,
            currentWeight: result.currentWeight
        }
    }

    @Put('/update/:babyId')
    @HttpCode(HttpStatus.OK)
    async updateBaby(
        @Param() babyId: UpdateBabyRequestParam,
        @Body() request: UpdateBabyRequest
    ){
        return this.updateBabyUsCase.execute({
            babyId: babyId.babyId,
            name: request.name,
            birthDate: request.birthDate,
            gender: request.gender,
            currentLength: request.currentLength,
            currentWeight: request.currentWeight
        })
    }
}