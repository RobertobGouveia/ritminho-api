import { IsUUID } from "class-validator";

export class GetBabyUseCaseInput {
    @IsUUID()
    babyId: string;
}