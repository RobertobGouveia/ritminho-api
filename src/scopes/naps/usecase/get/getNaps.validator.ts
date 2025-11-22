import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { GetNapsUseCaseInput } from "./getNaps.usecase.input";
import * as Joi from "joi";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class GetNapsvalidator implements BaseValidator<GetNapsUseCaseInput>{
    constructor(){}

    async validate(input: GetNapsUseCaseInput): Promise<void> {
        const schema = Joi.object({
            babyId: Joi
            .string()
            .required()
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