import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { CreateActivitiesUseCaseInput } from "./createActivities.usecase.input";
import { CreateActivitiesUseCaseOutput } from "./createActivities.usecase.output";
import * as Joi from "joi";
import { ActivitiesEnum } from "../../enum/activities.enum";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";
import { Activities } from "../../entities/activities.entity";

@Injectable()
export class CreateActivitiesValidator implements BaseValidator<CreateActivitiesUseCaseInput>{
    constructor(){}

    async validate(input: CreateActivitiesUseCaseInput): Promise<void> {
        const schema = Joi.object<CreateActivitiesUseCaseInput>({
            babyId: Joi
                .string()
                .required(),
            
            activities: Joi
                .array()
                .items(Joi.object<Activities>({
                    type: Joi
                        .string()
                        .valid(...Object.values(ActivitiesEnum))
                        .required(),
                    
                    description: Joi
                        .string()
                        .optional()
                }))
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