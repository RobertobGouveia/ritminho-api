import { IsUUID } from "class-validator";

export class GetMoodRequest {
    @IsUUID()
    babyId: string
}