export class UpdateActivitiesUseCaseOutput{
    activityId: string;
    type?: ActivitiesEnum;
    description?: string;
}

enum ActivitiesEnum {
    BATH = 'BATH',
    WALK = 'WALK',
    PLAY = 'PLAY'
}