import Auth from "../entities/auth.entity";
import SecurityHelper from "../helpers/security.helper";

export default class AuthBuilder {
    public static buildAuthentitationAuth (email: string, password?: string): Auth {
        const auth = new Auth();
            auth.email = email;

            if(password)
                auth.password = SecurityHelper.HashPassword(password)
            
        return auth
    }
}