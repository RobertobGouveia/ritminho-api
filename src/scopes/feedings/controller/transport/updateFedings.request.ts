import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsOptional, IsUUID } from "class-validator";


enum FeedingsTypeEnum {
    BREAST = 'BREAST',
    FORMULA = 'FORMULA'
}

export class UpdateFeedingsRequest{
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
    @IsOptional()
    @IsDate()
    startedAt?: Date;

    @Type(() => Date)
    @IsOptional()
    @IsDate()
    endedAt?: Date;
}