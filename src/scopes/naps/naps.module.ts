import { Module } from "@nestjs/common";
import { NapsController } from "./controller/naps.controller";
import { CreateNapsUseCaseModule } from "./usecase/create/createNaps.modules";
import { GetNapsModule } from "./usecase/get/getNaps.module";
import { UpdateNapsModule } from "./usecase/update/updateNaps.module";

@Module({
    imports:[CreateNapsUseCaseModule, GetNapsModule, UpdateNapsModule],
    controllers:[NapsController]
})
export class NapsModule {}