export class UpdateBabyUseCaseInput {
    babyId: string;
    name?: string;
    birthDate?: Date;
    gender?: string;
    currentLength?: number;
    currentWeight?: number;
}