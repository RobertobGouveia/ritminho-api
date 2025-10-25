import { Module } from "@nestjs/common";
import { CreateMoodModule } from "./usecase/create/createMood.module";
import { MoodController } from "./controller/mood.controller";

@Module({
    imports:[CreateMoodModule],
    controllers:[MoodController]
})
export class MoodModule {}