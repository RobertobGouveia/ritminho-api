# 👶 Ritminho API

[![CI](https://github.com/RobertobGouveia/ritminho-api/actions/workflows/tests.yaml/badge.svg?branch=dev)](https://github.com/RobertobGouveia/ritminho-api/actions/workflows/tests.yaml)
![Node](https://img.shields.io/badge/node-22.x-339933?logo=node.js&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?logo=nestjs&logoColor=white)
![License](https://img.shields.io/badge/license-UNLICENSED-lightgrey)

Aplicativo inteligente para acompanhamento da rotina de bebês, ajudando pais a registrarem e entenderem padrões de sono, alimentação e comportamento através de insights automatizados.

---

## 🚀 Sobre o projeto

O **Ritminho** é um app mobile pensado para simplificar o dia a dia dos pais, permitindo o registro rápido de atividades do bebê e oferecendo análises inteligentes baseadas em dados.

A proposta é transformar dados do cotidiano em **informações úteis e previsões**, trazendo mais tranquilidade e organização para a rotina familiar.

---

## ✨ Funcionalidades

- 🍼 Registro de mamadas (peito ou fórmula)
- 😴 Controle de sonecas e sono noturno
- 🧷 Troca de fraldas
- 😊 Registro de humor do bebê
- 🛁 Atividades (banho, passeio, brincadeiras)
- 📊 Timeline diária interativa
- 🤖 Insights inteligentes baseados em padrões
- 🌙 Modo assistente noturno
- 📄 Exportação de relatórios (PDF)

---

## 🧠 Diferencial

O Ritminho utiliza uma **IA baseada em regras** para:

- Identificar padrões de comportamento
- Sugerir horários ideais de sono
- Detectar possíveis alterações na rotina
- Ajudar na tomada de decisão dos pais

---

## 🛠️ Tecnologias utilizadas

### 📱 Mobile

- React Native
- TypeScript

### 🌐 Backend

- NestJS
- TypeORM

### 🗄️ Banco de dados

- PostgreSQL

---

## 🏗️ Arquitetura (backend)

A API segue uma organização inspirada em **Clean Architecture / Use Cases**, separando cada funcionalidade em módulos independentes (`scopes`):

```
src/scopes/<recurso>/
├── controller/        # rotas HTTP e DTOs de entrada/saída (transport)
├── usecase(s)/         # uma classe por caso de uso (create, get, update)
├── entity/             # entidades TypeORM
├── repository/         # acesso a dados, isolado por interface de repositório
└── <recurso>.module.ts
```

Módulos transversais ficam em `src/infrastructure` (autenticação, validação, exceptions) e em módulos de plataforma na raiz de `src/` (`kafka`, `AI Module`).

**Stack principal**

| Camada          | Tecnologia                                      |
|-----------------|--------------------------------------------------|
| Framework       | NestJS 11 + TypeScript                           |
| Banco de dados  | PostgreSQL + TypeORM                             |
| Autenticação    | JWT (Passport) + bcrypt                          |
| Validação       | class-validator / class-transformer              |
| Mensageria      | Kafka (eventos de domínio, ex: `baby.created`)   |
| IA              | Google Gemini (geração de relatórios)            |
| Observabilidade | nestjs-pino (logs estruturados)                  |
| Documentação    | Swagger / OpenAPI                                |
| Rate limiting   | `@nestjs/throttler`                              |
| Testes          | Jest                                             |
| CI              | GitHub Actions (build + testes a cada push/PR)   |

---

## 🔐 Autenticação e autorização

- Toda a API é protegida por **JWT** (`Authorization: Bearer <token>`), exceto `POST /v1/auth/register`, `POST /v1/auth/login` e `GET /health-check`.
- O token é obtido em `POST /v1/auth/login` e carrega o id do usuário autenticado.
- Endpoints que dependem de um bebê (`babyId`, seja em rota ou no corpo da requisição) passam por um guard de **ownership**: só o usuário dono do bebê pode ler ou alterar seus registros de sono, alimentação, humor, fraldas e atividades — outros usuários autenticados recebem `403 Forbidden`.
- Senhas são armazenadas com hash (`bcrypt`), nunca em texto puro.

---

## 📖 Documentação da API

Com o servidor rodando, a documentação interativa (Swagger) fica disponível em:

```
http://localhost:3800/docs
```

---

## ▶️ Rodando localmente

**Pré-requisitos:** Node 22+, PostgreSQL e Kafka (ou Docker para subir ambos via `src/docker/docker-compose.yml`).

```bash
# instalar dependências
npm install

# subir Postgres + Kafka + API via Docker
docker compose -f src/docker/docker-compose.yml up -d

# ou, com Postgres/Kafka já disponíveis, rodar a API localmente:
npm run start:dev
```

Configure as variáveis de ambiente em `.env` / `.env.local` (não versionadas) — veja `DB_*`, `JWT_ACCESS_SECRET`, `JWT_ACCESS_EXPIRATION_TIME`, `KAFKA_BROKER`, `GOOGLE_API_KEY`, entre outras usadas pela aplicação.

**Scripts úteis:**

```bash
npm run start:dev     # API em modo watch
npm run build          # build de produção
npm run test            # testes unitários
npm run test:e2e       # testes end-to-end
npm run lint             # lint + autofix
```

---

## 🗃️ Estrutura de dados

Principais entidades do sistema:

- `users`
- `babies`
- `feedings`
- `naps`
- `diaper_changes`
- `moods`
- `activities`

---

## ⚙️ Objetivo do projeto

Criar uma solução simples, intuitiva e inteligente para:

- Acompanhar a rotina do bebê
- Reduzir a ansiedade dos pais
- Gerar previsibilidade no dia a dia
- Oferecer suporte baseado em dados reais

---

## 📈 Roadmap (futuro)

- 🔔 Notificações inteligentes
- 📊 Dashboard avançado
- 🧠 Evolução da IA (machine learning)
- ⌚ Integração com dispositivos (wearables)
- 👨‍👩‍👧 Compartilhamento entre cuidadores

---

## 👨‍💻 Autor

Desenvolvido por **Roberto Barreto**  
📍 Recife - PE  
🔗 LinkedIn: https://www.linkedin.com/in/roberto-gouveia-875a65248/

---