import { IsEnum, IsUUID } from "class-validator";
import { MoodTypeEnum } from "../../enum/mood.enum";

export class CreateMoodRequest {
    @IsUUID()
    babyId: string;

    @IsEnum(MoodTypeEnum)
    mood:  MoodTypeEnum
}