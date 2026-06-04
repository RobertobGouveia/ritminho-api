import { Type } from "class-transformer";
import { IsArray, IsDate, IsEmail, IsNumber, IsString, ValidateNested } from "class-validator";


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

export class RegisterAuthRequest {
    @IsEmail()
    email: string;

    @IsString()
    password: string;

    @ValidateNested( { each: true } )
    @Type(() => User)
    user: User;
}

