import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { UpdateBabyUseCaseInput } from "./updateBaby.usecase.input";
import * as Joi from "joi";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class UpdateBabyValidator implements BaseValidator<UpdateBabyUseCaseInput>{
    constructor(){}

    async validate(input: UpdateBabyUseCaseInput): Promise<void> {
        const schema = Joi.object({
            userId: Joi
                .string()
                .required(),
            
            name: Joi
                .string()
                .optional(),

            birthDate: Joi
                .date()
                .optional(),

            gender: Joi
                .string()
                .optional()
        })

        const validation = await schema.validate(input)

        if(!!validation.error){
            throw new RequestEnding(
                HttpStatus.BAD_REQUEST,
                {
                    logMessage: `Validation error: ${validation.error.message}`,
                    returnData: {validationError: validation.error.message}
                }
            )
        }
        
    }
}