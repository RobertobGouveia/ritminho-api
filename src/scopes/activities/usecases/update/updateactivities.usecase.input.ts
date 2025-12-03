export class UpdateActivitiesUseCaseInput{
    babyId: string;
    activityId: string;
    type?: ActivitiesEnum;
    description?: string;
}

enum ActivitiesEnum {
    BATH = 'BATH',
    WALK = 'WALK',
    PLAY = 'PLAY'
}