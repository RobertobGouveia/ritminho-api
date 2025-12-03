import * as Joi from "joi";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";
import { HttpStatus, Injectable } from "@nestjs/common";
import { Baby } from "../../entity/babies.entity";
import { CreateBabyUseCaseInput } from "./createBaby.usecase.input";

@Injectable()
export default class CreateBabyValidator implements BaseValidator<CreateBabyUseCaseInput>{
    constructor(){}

    async validate(input: CreateBabyUseCaseInput): Promise<void> {
        const schema = Joi.object<CreateBabyUseCaseInput>({
            userId: Joi
                .string()
                .required(),

            babies: Joi
                .array()
                .items(Joi.object<Baby>({
                    name: Joi
                        .string()
                        .required(),
                    birthDate: Joi
                        .date()
                        .required(),
                    gender: Joi
                        .string()
                        .required(),

                    currentLength: Joi
                        .number()
                        .required(),

                    currentWeight: Joi
                        .number()
                        .required()
            }))
        })

    
    const validation = await schema.validate(input)
    if(!!validation.error){
        throw new RequestEnding(
            HttpStatus.BAD_REQUEST,
            {
                logMessage: `Validation error: ${validation.error.message}`,
                returnData: {validation: validation.error.message}
            }
        )
    }
    }
}