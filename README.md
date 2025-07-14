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

# NLW Project

Este projeto é composto por duas aplicações principais:
- **nlw-project**: Backend em Node.js
- **nlw-web**: Frontend em React

## Sumário
- [Descrição](#descrição)
- [Tecnologias](#tecnologias)
- [Estrutura de Pastas](#estrutura-de-pastas)
- [Como Executar](#como-executar)
- [Endpoints da API](#endpoints-da-api)
- [Funcionalidades](#funcionalidades)
- [Como Contribuir](#como-contribuir)
- [Licença](#licença)

---

## Descrição

Este projeto é um sistema de perguntas e respostas em salas, com suporte a gravação de áudio, utilizando Node.js no backend e React no frontend. O backend expõe uma API REST para gerenciamento de salas, perguntas e upload de áudios. O frontend permite a criação de salas, envio de perguntas e interação com o sistema.

## Tecnologias

- **Backend:**
  - Node.js
  - TypeScript
  - Drizzle ORM
  - SQLite
  - Docker
  - Gemini API (serviço externo)

- **Frontend:**
  - React
  - TypeScript
  - Vite

## Estrutura de Pastas

```
├── nlw-project/        # Backend
│   ├── src/
│   │   ├── db/         # Banco de dados, seeds, migrations
│   │   ├── http/       # Rotas HTTP
│   │   ├── services/   # Integrações externas
│   │   ├── env.ts      # Variáveis de ambiente
│   │   └── server.ts   # Inicialização do servidor
│   ├── docker/         # Scripts Docker
│   └── ...
├── nlw-web/            # Frontend
│   ├── src/
│   │   ├── components/ # Componentes React
│   │   ├── http/       # Hooks para requisições
│   │   ├── lib/        # Utilitários
│   │   ├── pages/      # Páginas principais
│   │   └── ...
│   └── ...
```

## Como Executar

### Pré-requisitos
- Node.js >= 18
- Docker (opcional para banco de dados)

### Backend

1. Instale as dependências:
   ```bash
   cd nlw-project
   npm install
   ```
2. Configure o banco de dados:
   - Para SQLite, execute as migrations:
     ```bash
     npm run migrate
     ```
   - Ou utilize o Docker:
     ```bash
     docker-compose up
     ```
3. Inicie o servidor:
   ```bash
   npm run dev
   ```

### Frontend

1. Instale as dependências:
   ```bash
   cd nlw-web
   npm install
   ```
2. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## Endpoints da API

- `POST /rooms` - Cria uma nova sala
- `GET /rooms` - Lista todas as salas
- `POST /questions` - Cria uma nova pergunta
- `GET /rooms/:id/questions` - Lista perguntas de uma sala
- `POST /upload-audio` - Faz upload de áudio

## Funcionalidades

- Criação e listagem de salas
- Envio e listagem de perguntas
- Upload e processamento de áudios
- Integração com API Gemini para análise de áudio
- Interface web intuitiva para interação

## Como Contribuir

1. Fork este repositório
2. Crie uma branch: `git checkout -b minha-feature`
3. Faça suas alterações e commit: `git commit -m 'feat: minha feature'`
4. Envie para o repositório remoto: `git push origin minha-feature`
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT.
