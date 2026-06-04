import { IsEnum, IsOptional, IsString } from "class-validator";

enum DiaperTypesEnum {
    PEE = 'PEE',
    POOP = 'POOP',
    PEE_AND_POOP = 'PEE_AND_POOP'  
}

export class UpdateDiaperChangesRequest {
    @IsOptional()
    @IsEnum(DiaperTypesEnum)
    type?: DiaperTypesEnum;

    @IsOptional()
    @IsString()
    details?: string;
}