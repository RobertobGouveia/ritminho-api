import { Module } from "@nestjs/common";
import { AuthModule } from "./auth/registerAuth.module";
import { BabiesModule } from "./babies/babies.module";
import { FeedingsModule } from "./feedings/feedings.module";
import { UsersModule } from "./users/user.module";
import { ActivitiesModule } from "./activities/activities.module";
import { DiaperChangesModule } from "./diaperChanges/diaperChanges.module";
import { MoodModule } from "./mood/mood.module";
import { NapsModule } from "./naps/naps.module";

@Module({
    imports:[AuthModule,
         BabiesModule, 
         FeedingsModule,
         UsersModule,
         ActivitiesModule,
         DiaperChangesModule,
         MoodModule,
         NapsModule
        ],
    providers:[],
    exports:[]
})

export class ScopesModule {}