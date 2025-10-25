import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "../entity/user.entity";
import { UserTypeOrmRepository } from "./user.typeorm.repository";
import { UserRepository } from "./user.repository";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    providers: [UserTypeOrmRepository, UserRepository],
    exports: [UserRepository]
})

export class UserRepositoryModule{} 