import { Injectable } from "@nestjs/common";
import { AuthTypeOrmRepository } from "./auth.typeorm.repository";
import Auth from "../entities/auth.entity";

@Injectable()
export class AuthRepository {
    constructor(
        private readonly authTypeOrmRepository: AuthTypeOrmRepository
    ){}

    create(user: Auth): Promise<Auth> {
        return this.authTypeOrmRepository.save(user)
    }

    update(user: Auth): Promise<Auth> {
        return this.authTypeOrmRepository.save(user)
    }

    findByEmail(email: string): Promise<Auth>{
        return this.authTypeOrmRepository.findOne({
            where: {
                email: email
            }
        })
    }

    findById(id: string): Promise<Auth>{
        return this.authTypeOrmRepository.findOneBy({ id })
    }
}