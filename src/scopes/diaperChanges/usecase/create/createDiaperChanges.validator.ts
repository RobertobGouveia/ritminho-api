import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { CreateDiaperChangesUseCaseInput } from "./createDiaperChanges.usecase.input";
import * as Joi from "joi";
import { DiaperTypesEnum } from "../../enum/diaperTypes.enum";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class CreateDiaperChangesValidator implements BaseValidator<CreateDiaperChangesUseCaseInput>{
    constructor(){}

    async validate(input: CreateDiaperChangesUseCaseInput): Promise<void> {
        const schema = Joi.object<CreateDiaperChangesUseCaseInput>({
            babyId: Joi
                .string()
                .required(),

            type: Joi
                .string()
                .valid(...Object.values(DiaperTypesEnum))
                .required(),

            details: Joi
                .string()
                .optional()
        })

        const validation = await schema.validate(input)

        if(!!validation.error) {
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