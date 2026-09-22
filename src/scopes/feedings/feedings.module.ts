import { Module } from "@nestjs/common";
import { CreateFeedingsModule } from "./usecase/create/createFeedings.module";
import { FeedingsController } from "./controller/feedings.controller";
import { GetFeedingsModule } from "./usecase/get/getFeedings.module";
import { UpdateFeedingsModule } from "./usecase/update/updateFeedings.module";
import { BabyOwnershipModule } from "../babies/guards/baby-ownership.module";

@Module({
    imports:[CreateFeedingsModule, GetFeedingsModule, UpdateFeedingsModule, BabyOwnershipModule],
    controllers:[FeedingsController]
})
export class FeedingsModule {}