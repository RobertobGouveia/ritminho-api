import { Type } from "class-transformer";
import { IsArray, IsDate, IsUUID, ValidateNested } from "class-validator";

export class CreateNapsRequest {
    @IsUUID()
    babyId: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Naps)
    naps: Naps[];
}

class Naps {
    @Type(() => Date)
    @IsDate()
    startedAt: Date;
    
    @Type(() => Date)
    @IsDate()
    endedAt: Date;
}