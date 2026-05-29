import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsOptional, IsUUID } from "class-validator";


enum FeedingsTypeEnum {
    BREAST = 'BREAST',
    FORMULA = 'FORMULA'
}

export class UpdateFeedingsUseCaseInput{
    @IsUUID()
    babyId: string;

    @IsUUID()
    feedingsId: string;

    @IsOptional()
    @IsEnum(FeedingsTypeEnum)
    type?: FeedingsTypeEnum;

    @IsOptional()
    @IsNumber()
    volume?: number;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    startedAt?: Date;

    @Type(() => Date)
    @IsDate()
    @IsOptional()
    endedAt?: Date;
}
