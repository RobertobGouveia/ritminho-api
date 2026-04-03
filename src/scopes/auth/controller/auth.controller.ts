import { Body, Controller, Get, HttpCode, HttpStatus, Post, Request, UseGuards } from "@nestjs/common";
import { RegisterAuthRequest } from "./transport/registerAuthRequest";
import RegisterAuthUsecase from "../usecase/register/registerAuth.usecase";
import { AuthService } from "src/infrastructure/authentication/authService";
import { JwtGuard } from "src/infrastructure/authentication/jwt.guard";
import { LoginRequest } from "./transport/login.request";
import { CurrentUser } from "src/infrastructure/authentication/authentication.decorator";

@Controller('v1/auth')
export class AuthController {
    constructor(
        private readonly registerAuthUseCase: RegisterAuthUsecase,
        private readonly authService: AuthService
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

    @Post('/login')
    @HttpCode(HttpStatus.OK)
    async login(
        @Body() request: LoginRequest
    ){
        return this.authService.login(request.email, request.password)
    }

    @UseGuards(JwtGuard)
    @Get('get-test')
    getProfile(@CurrentUser() user) {
        console.log('USER NO CONTROLLER', user)
        return user
    }
}