export class CreateDiaperChangesRequest {
    babyId: string;
    type: DiaperTypesEnum;
    details?: string;
}

enum DiaperTypesEnum {
    PEE = 'PEE',
    POOP = 'POOP',
    PEE_AND_POOP = 'PEE_END_POOP'  
}