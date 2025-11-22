import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { GetDiaperChangesUseCaseInput } from "./getDiaperChanges.usecase.input";
import * as Joi from "joi";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class GetDiaperChangesValidator implements BaseValidator<GetDiaperChangesUseCaseInput>{
    constructor(){}

    async validate(input: GetDiaperChangesUseCaseInput): Promise<void> {
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