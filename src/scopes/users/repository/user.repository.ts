import { Injectable } from "@nestjs/common";
import { UserTypeOrmRepository } from "./user.typeorm.repository";
import { User } from "../entity/user.entity";

@Injectable()
export class UserRepository {
    constructor(
        private readonly userTypeormRepository: UserTypeOrmRepository
    ){}

    create(user: User): Promise<User> {
        return this.userTypeormRepository.save(user)
    }

    findById(userId: string): Promise<User> {
        return this.userTypeormRepository.findOneBy({ id: userId })
    }
}