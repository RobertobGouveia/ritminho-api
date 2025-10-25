import { ActivitiesEnum } from "../../enum/activities.enum";

export class CreateActivitiesRequest {
    babyId: string;
    activities: {
        type: ActivitiesEnum,
        description?: string;
    }[]
}