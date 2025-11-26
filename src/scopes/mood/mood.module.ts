import { Module } from "@nestjs/common";
import { CreateMoodModule } from "./usecase/create/createMood.module";
import { MoodController } from "./controller/mood.controller";
import { GetMoodModule } from "./usecase/get/getMood.module";
import { UpdateMoodModule } from "./usecase/update/updateMood.module";

@Module({
    imports:[CreateMoodModule, GetMoodModule, UpdateMoodModule],
    controllers:[MoodController]
})
export class MoodModule {}