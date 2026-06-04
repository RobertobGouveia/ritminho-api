import { IsEnum, IsOptional, IsString } from "class-validator";

export enum ActivitiesEnum {
    BATH = 'BATH',
    WALK = 'WALK',
    PLAY = 'PLAY'
}

export class UpdateActivitiesRequest{
    @IsOptional()
    @IsEnum(ActivitiesEnum)
    type?: ActivitiesEnum;

    @IsString()
    @IsOptional()
    description?: string;
}