import { Type } from "class-transformer";
import { IsDate, IsEnum, IsNumber, IsOptional, IsUUID, Validate, ValidateNested } from "class-validator";

enum FeedingsTypeEnum {
    BREAST = 'BREAST',
    FORMULA = 'FORMULA'
}

export class CreateFeedingsRequest {
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