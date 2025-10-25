import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { CreateFeedingsUseCaseInput } from "./createFeedings.usecase.input";
import * as Joi from "joi";
import { FeedingsTypeEnum } from "../../enum/feedings.enum";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class CreateFeedingsValidator implements BaseValidator<CreateFeedingsUseCaseInput>{
    constructor(){}

    async validate(input: CreateFeedingsUseCaseInput): Promise<void> {
        const schema = Joi.object<CreateFeedingsUseCaseInput>({
            type: Joi
                .string()
                .valid(...Object.values(FeedingsTypeEnum))
                .required(),

            volume: Joi
                .number()
                .optional(),
            
            startedAt: Joi
                .date()
                .required(),
            
            endedAt: Joi
                .date()
                .required(),

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