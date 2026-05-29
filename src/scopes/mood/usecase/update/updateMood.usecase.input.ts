import { IsEnum, IsUUID } from "class-validator";

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

export class UpdateMoodUseCaseInput{
    @IsUUID()
    babyId: string;

    @IsUUID()
    moodId: string;

    @IsEnum(MoodTypeEnum)
    mood: MoodTypeEnum;
}