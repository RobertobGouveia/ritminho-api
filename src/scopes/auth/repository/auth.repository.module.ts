import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import Auth from "../entities/auth.entity";
import { AuthTypeOrmRepository } from "./auth.typeorm.repository";
import { AuthRepository } from "./auth.repository";


@Module({
    imports:[TypeOrmModule.forFeature([Auth])],
    providers:[ AuthTypeOrmRepository, AuthRepository],
    exports:[AuthRepository]
})

export class AuthRepositoryModule{}