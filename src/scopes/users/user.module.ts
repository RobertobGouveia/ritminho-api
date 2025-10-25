import { Module } from "@nestjs/common";
import { CreateUserModule } from "./usecase/createUser.module";

@Module({
    imports:[CreateUserModule],
    providers:[],
    controllers:[]
})
export class UsersModule {}