import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsOptional, IsUUID } from "class-validator";


enum FeedingsTypeEnum {
    BREAST = 'BREAST',
    FORMULA = 'FORMULA'
}

export class CreateFeedingsUseCaseInput {
    @IsEnum(FeedingsTypeEnum)
    type: FeedingsTypeEnum;

    @IsOptional()
    @IsNumber()
    volume?: number;

    @Type(() => Date)
    @IsDate()
    startedAt: Date;

    @Type(() => Date)
    @IsDate()
    endedAt: Date;

    @IsUUID()
    babyId: string;
}
