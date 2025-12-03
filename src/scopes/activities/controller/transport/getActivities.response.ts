export class GetActivitiesResponse{
    activities: {
        id: string;
        type: ActivitiesEnum;
        description?: string;
    }
}

enum ActivitiesEnum {
    BATH = 'BATH',
    WALK = 'WALK',
    PLAY = 'PLAY'
}