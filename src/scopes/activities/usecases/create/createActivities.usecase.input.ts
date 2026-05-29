import { Type } from "class-transformer";
import { IsArray, IsEnum, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";

enum ActivitiesEnum {
    BATH = 'BATH',
    WALK = 'WALK',
    PLAY = 'PLAY'
}

export class CreateActivitiesUseCaseInput{
    @IsUUID()
    babyId: string;

    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => Activity)
    activities: Activity[];
}

export class Activity {
    @IsEnum(ActivitiesEnum)
    type: ActivitiesEnum;

    @IsString()
    @IsOptional()
    description?: string;
}

