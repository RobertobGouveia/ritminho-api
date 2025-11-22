import { HttpStatus, Injectable } from "@nestjs/common";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { UpdateDiaperChangesUseCaseInput } from "./updateDiaperChanges.usecase.input";
import * as Joi from "joi";
import { DiaperTypesEnum } from "../../enum/diaperTypes.enum";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";

@Injectable()
export class UpdateDiaperChangesValidator implements BaseValidator<UpdateDiaperChangesUseCaseInput>{
    constructor(){}

    async validate(input: UpdateDiaperChangesUseCaseInput): Promise<void> {
        const schema = Joi.object<UpdateDiaperChangesUseCaseInput>({
            babyId: Joi
                .string()
                .required(),

            type: Joi
                .string()
                .valid(...Object.values(DiaperTypesEnum))
                .optional(),

            details: Joi
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