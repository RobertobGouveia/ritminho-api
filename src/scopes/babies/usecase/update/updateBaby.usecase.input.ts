import { Type } from "class-transformer";
import { IsDate, IsNumber, IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateBabyUseCaseInput {
    @IsUUID()
    babyId: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsOptional()
    @Type(() => Date)
    @IsDate()
    birthDate?: Date;

    @IsOptional()
    @IsString()
    gender?: string;

    @IsOptional()
    @IsNumber()
    currentLength?: number;

    @IsOptional()
    @IsNumber()
    currentWeight?: number;
}