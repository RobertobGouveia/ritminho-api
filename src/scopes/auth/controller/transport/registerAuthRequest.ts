export class RegisterAuthRequest {
    email: string;
    password: string;
    user: User;
}

export class User {
    name: string;
    babies: Baby[];
}

export class Baby {
    name: string;
    birthDate: Date;
    gender: string;
    currentLength: number;
    currentWeight: number;
}