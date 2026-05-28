import { IsArray, IsDate, IsEmail, IsNumber, IsString, ValidateNested } from "class-validator";

import { Type } from 'class-transform';


export class RegisterAuthUseCaseInput {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @ValidateNested()
    @Type(() => User)
    user: User;
}

export class User {
    @IsString()
    name: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Baby)
    babies: Baby[];
}

export class Baby {
    @IsString()
    name: string;

    @Type(() => Date)
    @IsDate()
    birthDate: Date;

    @IsString()
    gender: string;

    @IsNumber()
    currentLength: number;
    
    @IsNumber()
    currentWeight: number;
}