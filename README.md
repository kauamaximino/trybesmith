<h1 align="center">Store Manager 🏪</h1>

<h3 align="center">Neste projeto desenvolvi uma loja de itens medievais, no formato de uma API, utilizando Typescript.<h3/>

<br/>

## 🗞️ Sobre o projeto

Foi desenvolvido com todas as camadas da aplicação (Models, Services e Controllers).

Por meio dessa aplicação, é possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou CRUD, para as pessoas mais íntimas 😜 - Create, Read, Update e Delete).

---
## 🚀 Como executar o projeto

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/) e o [Insomnia](https://insomnia.rest/) ou algum [outro software](https://www.postman.com/) para testar as rotas desenvolvidas nessa API RESTful
<details>

```bash

# Clone este repositório
git clone git@github.com:kauamaximino/trybesmith.git

# Acesse a pasta do projeto no terminal/cmd
cd trybesmith

# Instale as dependências
npm install

# Inicie o banco de dados com o Docker
docker compose up -d

# Execute a aplicação em modo de desenvolvimento
npm run debug

# O servidor inciará na porta:3000 - acesse http://localhost:3000  

```
</details>

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
-  **[TypeScript](https://www.typescriptlang.org/)**
-  **[Node.js](https://nodejs.org/en/)**
-  **[Express](https://expressjs.com/pt-br/)**
-  **[Nodemon](https://www.npmjs.com/package/nodemon)**
-  **[JWT](https://jwt.io/)**
-  **[Joi](https://www.npmjs.com/package/joi)**
-  **[Docker](https://docker.com)**

> Veja o arquivo  [package.json](https://github.com/kauamaximino/trybesmith/blob/main/package.json)
