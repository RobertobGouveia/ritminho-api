export class CreateBabyRequest {
    userId: string;
    babies: {
        name: string;
        birthDate: Date;
        gender: string;
    }[];
}