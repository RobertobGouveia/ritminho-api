import { Module } from "@nestjs/common";
import { BabyRepositoryModule } from "../repository";
import { BabyOwnershipGuard } from "./baby-ownership.guard";

@Module({
    imports: [BabyRepositoryModule],
    providers: [BabyOwnershipGuard],
    exports: [BabyOwnershipGuard, BabyRepositoryModule]
})
export class BabyOwnershipModule {}
