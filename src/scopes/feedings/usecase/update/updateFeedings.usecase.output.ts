export class UpdateFeedingsUseCaseOutput {
    type: FeedingsTypeEnum;
    volume: number;
    startedAt: Date;
    endedAt: Date;
}

enum FeedingsTypeEnum {
    BREAST = 'BREAST',
    FORMULA = 'FORMULA'
}