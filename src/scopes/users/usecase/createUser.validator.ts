import BaseValidator from "src/infrastructure/validator/baseValidator";
import { CreateUserUseCaseInput } from "./createUser.usecase.input";
import * as Joi from "joi";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";
import { HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export default class CreateUserValidator implements BaseValidator<CreateUserUseCaseInput>{
    constructor(){}

    async validate(input: CreateUserUseCaseInput): Promise<void> {
        const schema = Joi.object<CreateUserUseCaseInput>({
            name: Joi
                .string()
                .required(),

            authId: Joi
                .string()
                .required()
        })

    const validation = await schema.validate(input)
    if(!!validation.error) {
        throw new RequestEnding(
            HttpStatus.BAD_REQUEST,
            {
                logMessage: `Validation error: ${validation.error.message}`,
                returnData: { validationError: validation.error.message}
            }
        )
    }
    }
}