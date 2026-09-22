import { Module } from "@nestjs/common";
import { NapsController } from "./controller/naps.controller";
import { CreateNapsUseCaseModule } from "./usecase/create/createNaps.modules";
import { GetNapsModule } from "./usecase/get/getNaps.module";
import { UpdateNapsModule } from "./usecase/update/updateNaps.module";
import { BabyOwnershipModule } from "../babies/guards/baby-ownership.module";

@Module({
    imports:[CreateNapsUseCaseModule, GetNapsModule, UpdateNapsModule, BabyOwnershipModule],
    controllers:[NapsController]
})
export class NapsModule {}