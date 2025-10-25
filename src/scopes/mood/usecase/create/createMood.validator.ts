import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { CreateMoodUseCaseInput } from "./createMood.usecase.input";
import * as Joi from "joi";
import { MoodTypeEnum } from "../../enum/mood.enum";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class CreateMoodValidator implements BaseValidator<CreateMoodUseCaseInput>{
    constructor(){}

    async validate(input: CreateMoodUseCaseInput): Promise<void> {
        const schema = Joi.object<CreateMoodUseCaseInput>({
            babyId: Joi
                .string()
                .required(),

            mood: Joi
                .array()
                .items(Joi.object({
                    type: Joi
                        .string()
                        .valid(...Object.values(MoodTypeEnum))
                        .required()
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