import { Module } from "@nestjs/common";
import { CreateFeedingsModule } from "./usecase/create/createFeedings.module";
import { FeedingsController } from "./controller/feedings.controller";
import { GetFeedingsModule } from "./usecase/get/getFeedings.module";
import { UpdateFeedingsModule } from "./usecase/update/updateFeedings.module";

@Module({
    imports:[CreateFeedingsModule, GetFeedingsModule, UpdateFeedingsModule],
    controllers:[FeedingsController]
})
export class FeedingsModule {}