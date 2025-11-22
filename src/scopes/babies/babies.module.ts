import { Module } from "@nestjs/common";
import { BabyController } from "./controller/babies.controller";
import { CreateBabyModule } from "./usecase/create/createBaby.module";
import GetBabyModule from "./usecase/get/getBaby.module";
import { UpdateBabyModule } from "./usecase/update/updateBaby.module";

@Module({
    controllers: [BabyController],
    imports:[ CreateBabyModule, GetBabyModule, UpdateBabyModule ]
})

export class BabiesModule {}