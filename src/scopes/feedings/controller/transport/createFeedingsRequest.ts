export class CreateFeedingsRequest {
    type: FeedingsTypeEnum;
    volume?: number;
    startedAt: Date;
    endedAt: Date;
    babyId: string;
}

enum FeedingsTypeEnum {
    BREAST = 'BREAST',
    FORMULA = 'FORMULA'
}