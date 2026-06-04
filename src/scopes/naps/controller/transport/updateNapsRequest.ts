import { Type } from "class-transformer";
import { IsDate, IsOptional } from "class-validator";

export class UpdateNapsRequest {
    @Type(() => Date)
    @IsDate()
    @IsOptional()
    startedAt?: Date;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    endedAt?: Date;
}