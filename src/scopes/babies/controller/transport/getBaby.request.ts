import { IsUUID } from "class-validator";

export  class GetBabyRequest {
    @IsUUID()
    babyId: string
}