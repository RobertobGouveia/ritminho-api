import { Module } from "@nestjs/common";
import { NapsController } from "./controller/naps.controller";
import { CreateNapsUseCaseModule } from "./usecase/create/createNaps.modules";
import { GetNapsModule } from "./usecase/get/getNaps.module";

@Module({
    imports:[CreateNapsUseCaseModule, GetNapsModule],
    controllers:[NapsController]
})
export class NapsModule {}