import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { UpdateActivitiesUseCaseInput } from "./updateactivities.usecase.input";
import * as Joi from "joi";
import { ActivitiesEnum } from "../../enum/activities.enum";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class UpdateActivitiesValidator implements BaseValidator<UpdateActivitiesUseCaseInput>{
    constructor(){}

    async validate(input: UpdateActivitiesUseCaseInput): Promise<void> {
        const schema = Joi.object<UpdateActivitiesUseCaseInput>({
            babyId: Joi
                .string()
                .required(),

            activityId: Joi
                .string()
                .required(),

            type: Joi
                .string()
                .valid(...Object.values(ActivitiesEnum))
                .optional(),
            
            description: Joi
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