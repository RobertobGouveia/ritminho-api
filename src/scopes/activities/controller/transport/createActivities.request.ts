import { IsArray, IsEnum, IsOptional, IsString, IsUUID, ValidateNested } from "class-validator";
import { ActivitiesEnum } from "../../enum/activities.enum";
import { Type } from 'class-transformer';

export class CreateActivitiesRequest {
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