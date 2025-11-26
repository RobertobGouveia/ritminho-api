import { MoodTypeEnum } from "../../enum/mood.enum";

export class CreateMoodUseCaseOutput {
    babyId: string;
    moodId: string;
    mood: MoodTypeEnum
}