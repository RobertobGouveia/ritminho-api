import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { UpdateNapsUseCaseInput } from "./updateNaps.usecase.input";
import * as Joi from "joi";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class UpdateNapsValidator implements BaseValidator<UpdateNapsUseCaseInput>{
    constructor(){}

    async validate(input: UpdateNapsUseCaseInput): Promise<void> {
        const schema = Joi.object<UpdateNapsUseCaseInput>({
            babyId: Joi
                .string()
                .required(),

            napId: Joi
                .string()
                .required(),
            
            startedAt: Joi
                .date()
                .optional(),

            endedAt: Joi
                .date()
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