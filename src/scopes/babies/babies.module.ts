import { Module } from "@nestjs/common";
import { CreateBabyModule } from "./usecase/createBaby.module";
import { BabyController } from "./controller/babies.controller";

@Module({
    controllers: [BabyController],
    imports:[ CreateBabyModule ]
})

export class BabiesModule {}