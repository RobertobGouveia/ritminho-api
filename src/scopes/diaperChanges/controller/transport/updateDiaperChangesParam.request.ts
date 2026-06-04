import { IsUUID } from "class-validator";

export class UpdateDiaperChangesRequestParam {
    @IsUUID()
    babyId: string;

    @IsUUID()
    diaperId: string;
}
