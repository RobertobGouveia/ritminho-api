import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import Auth from "../entities/auth.entity";

export class AuthTypeOrmRepository extends Repository<Auth>{
    constructor(
        @InjectRepository(Auth)
        private readonly authRepository: Repository<Auth>
    ){
        super(authRepository.target, authRepository.manager, authRepository.queryRunner)
    }
}