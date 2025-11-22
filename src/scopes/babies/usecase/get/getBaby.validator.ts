import BaseValidator from "src/infrastructure/validator/baseValidator";
import { GetBabyUseCaseInput } from "./getBaby.usecase.input";
import * as Joi from "joi";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";
import { HttpStatus, Injectable } from "@nestjs/common";

@Injectable()
export class GetBabyValidator implements BaseValidator<GetBabyUseCaseInput>{
    constructor(){}

    async validate(input: GetBabyUseCaseInput): Promise<void> {
        const schema = Joi.object<GetBabyUseCaseInput>({
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
                    returnData: {validation: validation.error.message}
                }
            )
        }
    }
}