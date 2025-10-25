import { Module } from "@nestjs/common";
import { NapsController } from "./controller/naps.controller";
import { CreateNapsUseCaseModule } from "./usecase/create/createNaps.modules";

@Module({
    imports:[CreateNapsUseCaseModule],
    controllers:[NapsController]
})
export class NapsModule {}