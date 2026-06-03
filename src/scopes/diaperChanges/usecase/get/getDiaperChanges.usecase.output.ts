export class GetDiaperChangesUseCaseOutput {
    diaperId: string;
    type: DiaperTypesEnum;
    details: string;
}

enum DiaperTypesEnum {
    PEE = 'PEE',
    POOP = 'POOP',
    PEE_AND_POOP = 'PEE_AND_POOP'  
}