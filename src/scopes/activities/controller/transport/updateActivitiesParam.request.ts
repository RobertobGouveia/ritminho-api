import { IsUUID } from "class-validator";

export class UpdateActivitiesRequestParam {
    @IsUUID()
    babyId: string;

    @IsUUID()
    activityId: string;
}
