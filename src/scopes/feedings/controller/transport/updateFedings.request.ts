export class UpdateFeedingsRequest{
    babyId: string;
    feedingsId: string;
    type?: FeedingsTypeEnum;
    volume?: number;
    startedAt?: Date;
    endedAt?: Date;
}

enum FeedingsTypeEnum {
    BREAST = 'BREAST',
    FORMULA = 'FORMULA'
}