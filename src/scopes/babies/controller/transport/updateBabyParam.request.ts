import { IsUUID } from "class-validator";

export class UpdateBabyRequestParam {
    @IsUUID()
    babyId: string;
}