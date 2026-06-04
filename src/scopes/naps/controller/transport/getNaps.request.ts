import { IsUUID } from "class-validator";

export class GetNapsRequest {
    @IsUUID()
    babyId: string
}