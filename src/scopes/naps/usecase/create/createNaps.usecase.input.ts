export class CreateNapsUseCaseInput {
    babyId: string;
    naps: {
        startedAt: Date;
        endedAt: Date;
    }[]
}