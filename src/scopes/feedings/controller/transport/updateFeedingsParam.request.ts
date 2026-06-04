import { IsUUID } from "class-validator";

export class UpdateFeedingsRequestParam {
    @IsUUID()
    babyId: string;

    @IsUUID()
    feedingsId: string;
}
