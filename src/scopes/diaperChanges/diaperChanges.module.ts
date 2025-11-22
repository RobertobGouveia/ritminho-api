import { Module } from "@nestjs/common";
import { DiaperChangesUseCaseModule } from "./usecase/create/createDiaperChanges.module";
import { DiaperChangesController } from "./controller/diaperChanges";
import { GetDiaperChangesModule } from "./usecase/get/getDiaperChanges.module";

@Module({
    imports:[DiaperChangesUseCaseModule, GetDiaperChangesModule],
    controllers:[DiaperChangesController]
})
export class DiaperChangesModule {}