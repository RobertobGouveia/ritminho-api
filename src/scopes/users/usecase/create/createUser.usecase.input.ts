import { IsString } from "class-validator";

export class CreateUserUseCaseInput {
    @IsString()
    authId: string;

    @IsString()
    name: string;
}