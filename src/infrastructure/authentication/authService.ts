import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { AuthRepository } from "src/scopes/auth/repository";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService,
        private authRepository: AuthRepository
    ){}

    async validateUser(email: string, password: string) {
        const auth = await this.authRepository.findByEmail(email)

        if(!auth){
            throw new UnauthorizedException('Usuário não encontrado')
        }

        const isMatch = await bcrypt.compare(password, auth.password)

        if(!isMatch){
            throw new UnauthorizedException('Senha inválida')
        }

        return auth
    }

    async login(email: string, password: string){
        const auth = await this.validateUser(email, password)

        const payload = {
            sub: auth.id,
            email: auth.email
        }

        return {
            accessToken: this.jwtService.sign(payload)
        }
    }
}