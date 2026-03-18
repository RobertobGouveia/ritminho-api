import CreateUserUseCase from 'src/scopes/users/usecase/create/createUser.usecase';
import CreateBabyUseCase from 'src/scopes/babies/usecase/create/createBaby.usecase';
import { RegisterAuthValidator } from 'src/scopes/auth/usecase/register/registerAuth.validator';
import { AuthRepository } from 'src/scopes/auth/repository';
import RegisterAuthUsecase from 'src/scopes/auth/usecase/register/registerAuth.usecase';

describe('RegisterAuthUsecase', () => {
  let usecase: RegisterAuthUsecase;
  let validator: jest.Mocked<RegisterAuthValidator>;
  let authRepository: jest.Mocked<AuthRepository>;
  let createUserUseCase: jest.Mocked<CreateUserUseCase>;
  let createBabyUseCase: jest.Mocked<CreateBabyUseCase>;

  beforeEach(() => {
    validator = { validate: jest.fn().mockResolvedValue(undefined) } as any;
    authRepository = {
      findByEmail: jest.fn().mockResolvedValue(null),
      create: jest.fn().mockResolvedValue({ id: 'auth-123', email: 'test@test.com' }),
    } as any;
    createUserUseCase = {
      execute: jest.fn().mockResolvedValue({ userId: 'user-123', name: 'Roberto' }),
    } as any;
    createBabyUseCase = {
      execute: jest.fn().mockResolvedValue({ ids: ['baby-1', 'baby-2'] }),
    } as any;

    usecase = new RegisterAuthUsecase(
      validator,  
      authRepository,
      createUserUseCase,
      createBabyUseCase,
    );
  });

  it('must register a new user successfully', async () => {
    const input = {
      email: 'test@test.com',
      password: 'senha123',
      user: {
        name: 'Roberto',
        babies: [
            {
                name: 'Baby 1',
                birthDate: new Date('2020-05-20T22:34:00.000Z'),
                gender: 'male',
                currentLength: 50,
                currentWeight: 3.5
            },
            {
                name: 'Baby 2',
                birthDate: new Date('2020-05-20T22:34:00.000Z'),
                gender: 'male',
                currentLength: 55,
                currentWeight: 3.3
            }
        ],
      },
      };

    const result = await usecase.execute(input);

    expect(validator.validate).toHaveBeenCalledWith(input);
    expect(authRepository.findByEmail).toHaveBeenCalledWith('test@test.com');
    expect(authRepository.create).toHaveBeenCalled();
    expect(createUserUseCase.execute).toHaveBeenCalledWith({
      authId: 'auth-123',
      name: 'Roberto',
    });
    expect(createBabyUseCase.execute).toHaveBeenCalledWith({
      userId: 'user-123',
      babies: [
        { name: 'Baby 1', birthDate: new Date('2020-05-20T22:34:00.000Z'), gender: 'male' },
        { name: 'Baby 2', birthDate: new Date('2020-05-20T22:34:00.000Z'), gender: 'male' },
      ],
    });

    expect(result).toEqual({
      authId: 'auth-123',
      userId: 'user-123',
      babiesIds: ['baby-1', 'baby-2'],
    });
  });
});