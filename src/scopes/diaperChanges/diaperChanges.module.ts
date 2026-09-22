import { Module } from "@nestjs/common";
import { DiaperChangesUseCaseModule } from "./usecase/create/createDiaperChanges.module";
import { DiaperChangesController } from "./controller/diaperChanges.controller";
import { GetDiaperChangesModule } from "./usecase/get/getDiaperChanges.module";
import { UpdateDiaperChangesModule } from "./usecase/update/updateDiaperChanges.module";
import { BabyOwnershipModule } from "../babies/guards/baby-ownership.module";

@Module({
    imports:[DiaperChangesUseCaseModule, GetDiaperChangesModule, UpdateDiaperChangesModule, BabyOwnershipModule],
    controllers:[DiaperChangesController]
})
export class DiaperChangesModule {}