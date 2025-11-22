import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { GetMoodUseCaseInput } from "./getMood.usecase.input";
import * as Joi from "joi";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class GetMoodValidator implements BaseValidator<GetMoodUseCaseInput>{
    constructor(){}

    async validate(input: GetMoodUseCaseInput): Promise<void> {
        const schema = Joi.object<GetMoodUseCaseInput>({
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