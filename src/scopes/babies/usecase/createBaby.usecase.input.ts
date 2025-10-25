export class CreateBabyUseCaseInput {
    userId: string;
    babies: {
        name: string;
        birthDate: Date;
        gender: string;
    }[];
}