import { Body, Controller, HttpCode, HttpStatus, Post } from "@nestjs/common";
import { RegisterAuthRequest } from "./transport/registerAuthRequest";
import RegisterAuthUsecase from "../usecase/register/registerAuth.usecase";

@Controller('v1/auth')
export class AuthController {
    constructor(
        private readonly registerAuthUseCase: RegisterAuthUsecase
    ){}

    @Post('/register')
    @HttpCode(HttpStatus.CREATED)
    async registerAuth (
        @Body() request: RegisterAuthRequest
    ) {
        return this.registerAuthUseCase.execute({
            email: request.email,
            password: request.password,
            user: request.user
        })
    }
}   