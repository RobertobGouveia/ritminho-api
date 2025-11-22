export class GetMoodUseCaseOutput {
        mood: 
        {
            type: MoodTypeEnum
        }
}

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