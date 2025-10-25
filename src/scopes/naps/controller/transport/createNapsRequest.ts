export class CreateNapsRequest {
    babyId: string;
    naps: {
        startedAt: Date;
        endedAt: Date;
    }[]
}