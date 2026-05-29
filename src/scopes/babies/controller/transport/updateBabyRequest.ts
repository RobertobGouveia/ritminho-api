import { IsDate, IsNumber, IsString, IsUUID } from "class-validator";
import { Type } from 'class-transformer' 

export class UpdateBabyRequest{
    @IsUUID()
    babyId: string;

    @IsString()
    name?: string;
    
    @Type(() => Date)
    @IsDate()
    birthDate?: Date;

    @IsString()
    gender?: string;

    @IsNumber()
    currentLength?: number;

    @IsNumber()
    currentWeight?: number;
}