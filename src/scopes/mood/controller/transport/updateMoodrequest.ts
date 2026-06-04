import { IsEnum } from "class-validator";

enum MoodTypeEnum {
    CALM = "CALM",
    ALERT = "ALERT",
    CRYING = "CRYING",
    SLEEPY = "SLEEPY",
    HAPPY = "HAPPY",
    IRRITATED = "IRRITATED",
    PLAYFUL = "PLAYFUL",
    HUNGRY = "HUNGRY",
    OTHER = 'OTHER'
}

export class UpdateMoodRequest{
    @IsEnum(MoodTypeEnum)
    mood: MoodTypeEnum;
}