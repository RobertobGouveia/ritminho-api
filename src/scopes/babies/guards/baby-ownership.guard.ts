import { CanActivate, ExecutionContext, ForbiddenException, Injectable, NotFoundException } from "@nestjs/common";
import { BabyRepository } from "../repository/baby.repository";

@Injectable()
export class BabyOwnershipGuard implements CanActivate {
    constructor(
        private readonly babyRepository: BabyRepository
    ){}

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const babyId: string | undefined = request.params?.babyId ?? request.body?.babyId;

        if(!babyId){
            return true;
        }

        const ownerId = await this.babyRepository.findOwnerId(babyId);

        if(!ownerId){
            throw new NotFoundException('Bebê não encontrado');
        }

        if(ownerId !== request.user?.userId){
            throw new ForbiddenException('Você não tem acesso a este recurso');
        }

        return true;
    }
}
