import { IsUUID } from "class-validator";

export class GetFeedingsUseCaseInput{
    @IsUUID()
    babyId: string;
}