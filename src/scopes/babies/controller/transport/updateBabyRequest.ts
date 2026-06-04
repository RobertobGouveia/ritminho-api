import { IsDate, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";
import { Type } from 'class-transformer' 

export class UpdateBabyRequest{
    @IsString()
    @IsOptional()
    name?: string;
    
    @Type(() => Date)
    @IsDate()
    @IsOptional()
    birthDate?: Date;

    @IsString()
    @IsOptional()
    gender?: string;

    @IsNumber()
    @IsOptional()
    currentLength?: number;

    @IsNumber()
    @IsOptional()
    currentWeight?: number;
}