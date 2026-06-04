import { IsUUID } from "class-validator";

export class UpdateNapsRequestParam {
    @IsUUID()
    babyId: string;

    @IsUUID()
    napId: string;
}
