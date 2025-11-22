import { Module } from "@nestjs/common";
import { CreateMoodModule } from "./usecase/create/createMood.module";
import { MoodController } from "./controller/mood.controller";
import { GetMoodModule } from "./usecase/get/getMood.module";

@Module({
    imports:[CreateMoodModule, GetMoodModule],
    controllers:[MoodController]
})
export class MoodModule {}