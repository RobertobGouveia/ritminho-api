import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsOptional } from "class-validator";


enum FeedingsTypeEnum {
    BREAST = 'BREAST',
    FORMULA = 'FORMULA'
}

export class UpdateFeedingsRequest{
    @IsOptional()
    @IsEnum(FeedingsTypeEnum)
    type?: FeedingsTypeEnum;

    @IsOptional()
    @IsNumber()
    volume?: number;

    @Type(() => Date)
    @IsOptional()
    @IsDate()
    startedAt?: Date;

    @Type(() => Date)
    @IsOptional()
    @IsDate()
    endedAt?: Date;
}