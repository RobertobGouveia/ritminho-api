import { Module } from "@nestjs/common";
import { RegisterAuthModule } from "./usecase/register/registerAuth.module";
import { AuthController } from "./controller/auth.controller";
import { UsersModule } from "../users/user.module";
import { JwtModule } from "@nestjs/jwt";
import { AuthService } from "src/infrastructure/authentication/authService";
import { AuthRepositoryModule } from "./repository";
import { JwtStrategy } from "src/infrastructure/authentication/jwt.strategy";

@Module({
    imports:[RegisterAuthModule, AuthRepositoryModule, UsersModule, JwtModule.register({
        secret: process.env.JWT_ACCESS_SECRET,
        signOptions: { expiresIn: '1d' }
    })],
    controllers:[AuthController],
    providers:[AuthService, JwtStrategy],
    exports: [AuthService]
})

export class AuthModule {}