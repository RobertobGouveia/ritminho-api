import BaseValidator from "src/infrastructure/validator/baseValidator";
import { GetFeedingsUseCaseInput } from "./getFeedings.usecase.input";
import * as Joi from "joi";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";
import { HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class GetFeedingsValidator implements BaseValidator<GetFeedingsUseCaseInput>{
    constructor(){}

    async validate(input: GetFeedingsUseCaseInput): Promise<void> {
        const schema = Joi.object<GetFeedingsUseCaseInput>({
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