import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { GetActivitiesUseCaseInput } from "./getActivities.usecase.input";
import * as Joi from "joi";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class GetActivitiesValidador implements BaseValidator<GetActivitiesUseCaseInput>{
    constructor(){}

    async validate(input: GetActivitiesUseCaseInput): Promise<void> {
        const schema = Joi.object<GetActivitiesUseCaseInput>({
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