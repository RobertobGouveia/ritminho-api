import { IsUUID } from "class-validator";

export class GetActivitiesRequest {
    @IsUUID()
    babyId: string;
}