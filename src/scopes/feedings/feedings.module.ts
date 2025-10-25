import { Module } from "@nestjs/common";
import { CreateFeedingsModule } from "./usecase/create/createFeedings.module";
import { FeedingsController } from "./controller/feedings.controller";

@Module({
    imports:[CreateFeedingsModule],
    controllers:[FeedingsController]
})
export class FeedingsModule {}