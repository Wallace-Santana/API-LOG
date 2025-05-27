
# 📦 API de Entrega de Encomendas

API RESTful para gerenciamento de entregas de encomendas, construída com Node.js, TypeScript, Express e Prisma ORM.

---

## 🚀 Tecnologias Utilizadas

- **Node.js** — Runtime JavaScript
- **TypeScript** — Tipagem estática
- **Express** — Framework web
- **Prisma** — ORM e migrations
- **Zod** — Validações
- **Bcrypt** — Hash de senhas
- **JWT** — Autenticação
- **Jest** — Testes automatizados
- **Supertest** — Testes HTTP
- **TSX** — Execução de TypeScript sem build manual
- **Docker** — Containerização
- **Bitnami PostgreSQL** — Banco de dados em container

---

## 🗂️ Estrutura do Banco de Dados

### Tabelas principais:

- **users**: Armazena informações dos usuários.
- **deliveries**: Armazena informações sobre as entregas.
- **delivery_logs**: Histórico de atualizações das entregas.

### Relacionamentos:

- Um usuário possui várias entregas.
- Cada entrega possui vários logs de atualização.

---

## 🛠️ Dependências

### Produção:

- @prisma/client
- docker
- bcrypt
- express
- express-async-errors
- jsonwebtoken
- zod

### Desenvolvimento:

- prisma
- typescript
- jest
- supertest
- ts-jest
- tsx
- Tipagens: @types/bcrypt, @types/express, @types/jest, @types/jsonwebtoken, @types/node, @types/supertest

---

## ⚙️ Configuração e Instalação

### ✅ Pré-requisitos:

- Node.js (v18 ou superior recomendado)
- npm ou yarn
- Docker e Docker Compose

### 📝 Passos:

1. Clone o repositório:

```bash
git clone https://github.com/Wallace-Santana/API-LOG.git

```
2. Instale as dependências:

```bash
# Usando NPM
npm install

# Ou usando Yarn
yarn install
```

3. Configure as variáveis de ambiente:

Crie um arquivo `.env` com base no `.env.example`:

4. Suba o banco de dados com Docker:

```bash
docker-compose up -d
```

5. Inicie o Prisma Studio para visualizar os dados:

```bash
npx prisma migrate dev

npx prisma studio 

```
6. Suba o banco de dados com Docker Compose:

```bash
docker-compose up -d
```

O banco estará disponível em: `localhost:5432`  
Usuário: `admin`  
Senha: `admin`  
Database: `deliveries_db`

7. Execute o servidor:

```bash
npm run dev
```

8. Execute os testes:

```bash
npm run test
# ou
yarn test
```
## 🧪 Testes com Insomnia

Importe o arquivo `.json` do Insomnia (fornecido neste projeto) para testar os endpoints de forma prática. Inclui exemplos de:

- Registro de usuário
- Login
- Rotas autenticadas (entregas, logs, etc)

## 📂 Funcionalidades

- ✅ Cadastro e login de usuários com JWT
- ✅ Criptografia de senhas com bcrypt
- ✅ Middleware de autenticação por token
- ✅ Registro e consulta de entregas
- ✅ Registro de logs das entregas
- ✅ Interface com Prisma Studio

## 📌 Scripts no package.json

- \`dev\`: Inicia o servidor em modo desenvolvimento com TSX.
- \`test\`: Roda os testes com Jest.
- \` npx prisma studio\`: Gera o client do Prisma.
- \` npx  prisma migrate dev\`: Executa as migrations.

---

## 🔒 Autenticação

- **JWT**: Token gerado no login.
- **Bcrypt**: Hash de senhas antes de salvar no banco.

---

## 🔗 Endpoints Principais

- POST /users — Cadastrar usuário
- POST /login — Login e geração de token
- POST /deliveries — Criar nova entrega
- PATCH /deliveries/:id — Atualizar status da entrega
- GET /deliveries — Listar entregas
- POST /delivery-logs — Criar log de entrega

---

## 🧱 Modelo do Banco de Dados

### Users
- id: uuid
- name: varchar
- email: varchar
- role: varchar
- password: varchar
- created_at: datetime
- updated_at: datetime

### Deliveries
- id: uuid
- user_id: uuid
- description: varchar
- status: varchar
- created_at: datetime
- updated_at: datetime

### Delivery Logs
- id: uuid
- delivery_id: uuid
- description: varchar
- created_at: datetime
- updated_at: datetime

---


Desenvolvido com base em estudos.