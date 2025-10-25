import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Feedings } from "../entity/feedings.entity";
import { FeedingsTypeOrmRepository } from "./feedings.typeorm.repository";
import { FeedingsRepository } from "./feedings.repository";

@Module({
    imports:[TypeOrmModule.forFeature([Feedings])],
    providers:[FeedingsTypeOrmRepository, FeedingsRepository],
    exports:[FeedingsRepository]
})

export class FeedingsRepositoryModule{}