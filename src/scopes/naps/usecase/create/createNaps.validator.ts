import { HttpStatus, Injectable } from "@nestjs/common";
import * as Joi from "joi";
import BaseValidator from "src/infrastructure/validator/baseValidator";
import { CreateNapsUseCaseInput } from "./createNaps.usecase.input";
import RequestEnding from "src/infrastructure/exceptions/RequestEnding";
import { Naps } from "../../entities/naps.entity";

@Injectable()
export class CreateNapsValidator implements BaseValidator<CreateNapsUseCaseInput>{
    constructor(){}
    
    async validate(input: CreateNapsUseCaseInput): Promise<void> {
        const schema = Joi.object<CreateNapsUseCaseInput>({
            babyId: Joi
                .string()
                .required(),
            
            naps: Joi
                .array()
                .items(Joi.object<Naps>({
                    startedAt: Joi
                        .date()
                        .required(),
                    
                    endedAt: Joi
                        .date()
                        .required()
                })).required()
        })

        const validation = await schema.validate(input);
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