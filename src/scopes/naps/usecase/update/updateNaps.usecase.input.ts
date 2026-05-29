import { Type } from "class-transformer";
import { IsDate, IsOptional, IsUUID } from "class-validator";

export class UpdateNapsUseCaseInput {
    @IsUUID()
    babyId: string;

    @IsUUID()
    napId: string;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    startedAt?: Date;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    endedAt?: Date;
}