import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AuthController (e2e) - Register', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('/v1/auth/register (POST) - deve registrar um usuário com sucesso', async () => {
    const response = await request(app.getHttpServer())
      .post('/v1/auth/register')
      .send({
        email: 'novo@teste.com',
        password: 'senha123',
        user: {
          name: 'Roberto Teste',
        },
      })
      .expect(201);

    // Aqui você pode validar o que o seu usecase retorna
    expect(response.body).toHaveProperty('id'); // se o usecase retorna um id
    expect(response.body.email).toBe('novo@teste.com');
  });

  it('/v1/auth/register (POST) - deve falhar se faltar dados obrigatórios', async () => {
    return request(app.getHttpServer())
      .post('/v1/auth/register')
      .send({
        email: '',
        password: '',
        user: {},
      })
      .expect(400); // Bad Request
  });
});