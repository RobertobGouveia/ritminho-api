import { IsEnum, IsOptional, IsString, IsUUID } from "class-validator";

enum DiaperTypesEnum {
    PEE = 'PEE',
    POOP = 'POOP',
    PEE_AND_POOP = 'PEE_AND_POOP'  
}

export class CreateDiaperChangesUseCaseInput {
    @IsUUID()
    babyId: string;

    @IsEnum(DiaperTypesEnum)
    type: DiaperTypesEnum;

    @IsOptional()
    @IsString()
    details?: string;
}