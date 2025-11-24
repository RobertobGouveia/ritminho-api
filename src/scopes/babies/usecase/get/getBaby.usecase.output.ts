import { ActivitiesEnum } from "src/scopes/activities/enum/activities.enum";
import { DiaperTypesEnum } from "src/scopes/diaperChanges/enum/diaperTypes.enum";
import { FeedingsTypeEnum } from "src/scopes/feedings/enum/feedings.enum";
import { MoodTypeEnum } from "src/scopes/mood/enum/mood.enum";

export interface GetBabyUseCaseOutput {
    id: string;
    name: string;
    birthDate: Date;
    gender: string;
    user: string;
    feedings: Feedings[];
    activities: Activities[];
    naps: Naps[];
    diaperChanges: DiaperChanges[];
    mood: Mood[]
}

class Feedings {
    id: string;
    type: FeedingsTypeEnum;
    volume?: number;
    startedAt: Date;
    endedAt: Date;
}

class Activities {
    id: string;
    type: ActivitiesEnum;
    description?: string;
}

class Naps {
    id: string;
    startedAt: Date;
    endedAt: Date
}

class DiaperChanges {
    id: string;
    type: DiaperTypesEnum;
    details?: string;
}

class Mood{
    id: string;
    moodType: MoodTypeEnum
}
