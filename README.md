# 🚀 NLW-Chat

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Fastify](https://img.shields.io/badge/Fastify-000000?style=for-the-badge&logo=fastify&logoColor=white)
![Drizzle ORM](https://img.shields.io/badge/Drizzle-3E7C3F?style=for-the-badge)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

> Projeto desenvolvido para fins de estudo, focado em criar um backend para uma aplicação de chat.

---

## 🛠️ Tecnologias Utilizadas

- **Framework:** Fastify para APIs web de alta performance
- **ORM:** Drizzle ORM (type-safe)
- **Banco de Dados:** PostgreSQL + pgvector
- **Validação:** Zod
- **Linguagem:** TypeScript
- **Containerização:** Docker & Docker Compose

---

## 📁 Estrutura do Projeto

- **src/env.ts:** Gerenciamento e validação de variáveis de ambiente
- **src/http/routes:** Rotas da API
- **src/db/schema:** Definição das tabelas
- **src/db/migrations:** Migrações SQL (Drizzle Kit)
- **src/db/connection.ts:** Conexão com o banco
- **src/db/seed.ts:** Popular o banco com dados iniciais
- **docker-compose.yaml:** Ambiente do banco via Docker

---

## ⚡ Setup e Configuração

### Pré-requisitos

- Node.js
- Docker & Docker Compose

### 1. Configuração do Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3333
DATABASE_URL="postgresql://docker:docker@localhost:5432/project"
```

### 2. Instalação

Instale as dependências:

```bash
npm install
```

### 3. Banco de Dados

Inicie o PostgreSQL com Docker Compose:

```bash
docker-compose up -d
```

Aplique as migrações:

```bash
npx drizzle-kit migrate
```

(Opcional) Popule o banco:

```bash
npm run db:seed
```

### 4. Executando o Projeto

Modo desenvolvimento:

```bash
npm run dev
```

Modo produção:

```bash
npm start
```

A API estará disponível em [http://localhost:3333](http://localhost:3333).

---

## 💬 Preview

> Sinta-se à vontade para contribuir ou abrir issues!
