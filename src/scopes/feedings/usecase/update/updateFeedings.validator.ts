import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { UpdateFeedingsUseCaseInput } from "./updateFeedings.usecase.input";
import * as Joi from "joi";
import { MoodTypeEnum } from "../../../mood/enum/mood.enum";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";
import { FeedingsTypeEnum } from "../../enum/feedings.enum";

@Injectable()
export class UpdateFeedingsValidator implements BaseValidator <UpdateFeedingsUseCaseInput>{
    constructor(){}

    async validate(input: UpdateFeedingsUseCaseInput): Promise<void> {
        const schema = Joi.object<UpdateFeedingsUseCaseInput>({
            babyId: Joi
                .string()
                .required(),

            feedingsId: Joi
                .string()
                .required(),

            type: Joi
                .string()
                .valid(...Object.values(FeedingsTypeEnum))
                .optional(),

            volume: Joi
                .number()
                .optional(),
            
            startedAt: Joi
                .date()
                .optional(),
            
            endedAt: Joi
                .date()
                .optional(),
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