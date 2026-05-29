import { IsEnum, IsOptional, IsString, IsUUID } from "class-validator";

export enum ActivitiesEnum {
    BATH = 'BATH',
    WALK = 'WALK',
    PLAY = 'PLAY'
}

export class UpdateActivitiesRequest{
    @IsUUID()
    babyId: string;

    @IsString()
    activityId: string;
    
    @IsOptional()
    @IsEnum(ActivitiesEnum)
    type?: ActivitiesEnum;

    @IsString()
    @IsOptional()
    description?: string;
}