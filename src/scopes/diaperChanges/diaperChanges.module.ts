import { Module } from "@nestjs/common";
import { DiaperChangesUseCaseModule } from "./usecase/create/createDiaperChanges.module";
import { DiaperChangesController } from "./controller/diaperChanges";

@Module({
    imports:[DiaperChangesUseCaseModule],
    controllers:[DiaperChangesController]
})
export class DiaperChangesModule {}