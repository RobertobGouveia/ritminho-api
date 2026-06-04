import { IsUUID } from "class-validator";

export class GetActivitiesUseCaseInput{
    @IsUUID()
    babyId: string;
}