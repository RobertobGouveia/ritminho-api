export class CreateActivitiesUseCaseInput{
    babyId: string;
    activities: {
        type: ActivitiesEnum;
        description?: string;
    }[]
}

enum ActivitiesEnum {
    BATH = 'BATH',
    WALK = 'WALK',
    PLAY = 'PLAY'
}