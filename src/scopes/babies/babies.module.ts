import { Module } from "@nestjs/common";
import { BabyController } from "./controller/babies.controller";
import { CreateBabyModule } from "./usecase/create/createBaby.module";
import GetBabyModule from "./usecase/get/getBaby.module";

@Module({
    controllers: [BabyController],
    imports:[ CreateBabyModule, GetBabyModule ]
})

export class BabiesModule {}