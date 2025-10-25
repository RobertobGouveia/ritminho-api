import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "../entity/user.entity";

export class UserTypeOrmRepository extends Repository<User>{
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>
    ){
        super(userRepository.target, userRepository.manager, userRepository.queryRunner)
    }
}