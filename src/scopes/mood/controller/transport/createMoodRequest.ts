import { MoodTypeEnum } from "../../enum/mood.enum";

export class CreateMoodRequest {
    babyId: string;
    mood: {
        type: MoodTypeEnum
    }[]
}