import { IsUUID } from "class-validator";

export class UpdateMoodRequestParam {
    @IsUUID()
    babyId: string;

    @IsUUID()
    moodId: string;
}
