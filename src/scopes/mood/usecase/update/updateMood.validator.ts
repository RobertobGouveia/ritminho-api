import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { UpdateMoodUseCaseInput } from "./updateMood.usecase.input";
import * as Joi from "joi";
import { MoodTypeEnum } from "../../enum/mood.enum";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class UpdateMoodValidator implements BaseValidator<UpdateMoodUseCaseInput>{
    constructor(){}

    async validate(input: UpdateMoodUseCaseInput): Promise<void> {
        const schema = Joi.object({
            babyId: Joi
                .string()
                .required(),

            moodId: Joi
                .string()
                .required(),

            mood: Joi
                .string()
                .valid(...Object.values(MoodTypeEnum))
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