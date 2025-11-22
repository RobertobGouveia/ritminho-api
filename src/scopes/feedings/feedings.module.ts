import { Module } from "@nestjs/common";
import { CreateFeedingsModule } from "./usecase/create/createFeedings.module";
import { FeedingsController } from "./controller/feedings.controller";
import { GetFeedingsModule } from "./usecase/get/getFeedings.module";

@Module({
    imports:[CreateFeedingsModule, GetFeedingsModule],
    controllers:[FeedingsController]
})
export class FeedingsModule {}