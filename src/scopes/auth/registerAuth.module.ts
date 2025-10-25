import { Module } from "@nestjs/common";
import { RegisterAuthModule } from "./usecase/register/registerAuth.module";
import { AuthController } from "./controller/auth.controller";

@Module({
    imports:[RegisterAuthModule],
    controllers:[AuthController],
    providers:[]
})

export class AuthModule {}