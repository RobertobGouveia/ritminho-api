import BaseValidator from "src/infrastructure/validator/baseValidator";
import { Baby, RegisterAuthUseCaseInput, User } from "./registerAuth.usecase.input";
import { HttpStatus, Injectable } from "@nestjs/common";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";
import * as Joi from "joi";

@Injectable()
export class RegisterAuthValidator implements BaseValidator<RegisterAuthUseCaseInput>{
    constructor(){}

    async validate(input: RegisterAuthUseCaseInput): Promise<void> {
        const schema = Joi.object<RegisterAuthUseCaseInput>({
            email: Joi
                .string()
                .required(),

            password: Joi
                .string()
                .min(8)
                .required(),

            user: Joi
                .object<User>({
                    name: Joi
                        .string()
                        .required(),
                    babies: Joi
                        .array()
                        .items(Joi.object<Baby>({
                            name: Joi
                                .string()
                                .required(),
                            birthDate: Joi
                                .date()
                                .required(),
                            gender: Joi
                                .string()
                                .required()
                        })).required()
                    }).required()
        })
        
        const validation = await schema.validate(input)
        if(!!validation.error) {
                throw new RequestEnding(
                    HttpStatus.BAD_REQUEST,
                    {
                        logMessage: `validation Error: ${validation.error.message}`,
                        returnData: {validationError: validation.error.message}
                    }
                )
        }
    }
}