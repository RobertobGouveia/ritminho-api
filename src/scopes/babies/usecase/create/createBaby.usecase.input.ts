import { IsArray, IsDate, IsNumber, IsString, ValidateNested } from "class-validator";
import { Type } from 'class-transform';

export class CreateBabyUseCaseInput {
    @IsString()
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
}[];