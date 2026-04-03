import { ExtractJwt } from "passport-jwt";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-jwt";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
    constructor() {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: process.env.JWT_ACCESS_SECRET
        })
    }

    async validate(payload: any) {
        console.log('validate chamou!', payload)
        return {
            id: payload.sub,
            email: payload.email
        }
    }
}