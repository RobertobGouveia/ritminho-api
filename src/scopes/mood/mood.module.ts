import { Module } from "@nestjs/common";
import { CreateMoodModule } from "./usecase/create/createMood.module";
import { MoodController } from "./controller/mood.controller";
import { GetMoodModule } from "./usecase/get/getMood.module";
import { UpdateMoodModule } from "./usecase/update/updateMood.module";
import { BabyOwnershipModule } from "../babies/guards/baby-ownership.module";

@Module({
    imports:[CreateMoodModule, GetMoodModule, UpdateMoodModule, BabyOwnershipModule],
    controllers:[MoodController]
})
export class MoodModule {}