import { IsEnum, IsOptional, IsString, IsUUID } from "class-validator";

enum DiaperTypesEnum {
    PEE = 'PEE',
    POOP = 'POOP',
    PEE_AND_POOP = 'PEE_AND_POOP'  
}

export class UpdateDiaperChangesRequest {
    @IsUUID()
    babyId: string;

    @IsUUID()
    diaperId: string;

    @IsOptional()
    @IsEnum(DiaperTypesEnum)
    type?: DiaperTypesEnum;

    @IsOptional()
    @IsString()
    details?: string;
}