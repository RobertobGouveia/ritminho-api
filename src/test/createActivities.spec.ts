import { ActivitiesEnum } from "src/scopes/activities/enum/activities.enum";
import { ActivitiesRepository } from "src/scopes/activities/repository/activities.repository";
import { CreateActivitesUseCase } from "src/scopes/activities/usecases/create/createActivities.usecase"
import { CreateActivitiesValidator } from "src/scopes/activities/usecases/create/createActivities.validator";
import { BabyRepository } from "src/scopes/babies/repository";

describe('CreateActivitiesUseCase', () => {
    let usecase: CreateActivitesUseCase;
    let validator: jest.Mocked<CreateActivitiesValidator>;
    let activitiesRepository: jest.Mocked<ActivitiesRepository>;
    let babyRepository: jest.Mocked<BabyRepository>;

    beforeEach(() => {
        validator = { validate: jest.fn().mockResolvedValue(undefined)} as any;
        babyRepository = { findById : jest.fn().mockResolvedValue(null)} as any;
        activitiesRepository = {
            create: jest.fn().mockResolvedValue([
                { id: 'activities-1' }
            ])
        } as any;



        usecase = new CreateActivitesUseCase(
            validator,
            babyRepository,
            activitiesRepository
        )
    });

    it('deve criar uma nova atividade', async () => {
        const input = {
            babyId: 'baby-1',
            activities: [
            {
                type: ActivitiesEnum.BATH,
                description: 'Brincou de teste',
            },
            ],
        };

        const result = await usecase.execute(input);

        expect(validator.validate).toHaveBeenCalledWith(input);
        expect(babyRepository.findById).toHaveBeenCalledWith('baby-1');
        expect(result).toEqual({
            activitiesIds: ['activities-1']
        });
        
    });
})