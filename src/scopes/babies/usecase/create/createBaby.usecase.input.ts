import { IsArray, IsDate, IsNumber, IsString, IsUUID, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';

export class CreateBabyUseCaseInput {
    @IsUUID()
    userId: string;

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
    currentLength: number

    @IsNumber()
    currentWeight: number;
}