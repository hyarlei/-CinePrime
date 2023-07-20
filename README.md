<h1 align="center">Cine🍿Prime</h1>

# Visão Geral

CinePrime é uma aplicação de gerenciamento de cinema, que permite cadastrar sessões de filmes, listar sessões disponíveis, cadastrar e listar filmes, cadastrar compradores, gerenciar ingressos e realizar compras de ingressos. O objetivo da aplicação é fornecer uma plataforma para que os usuários possam encontrar informações sobre sessões de filmes, comprar ingressos e gerenciar suas compras.

### Funcionalidades

1. Cadastrar Filme
Permitir que o usuário cadastre um filme, informando o nome, o código, o genero, a duração e a classificação indicativa.

2. Listar Filmes
Exibir uma lista com todos os filmes cadastrados, incluindo o genero e a classificação indicativa.

3. Cadastrar Sessão
Permitir que o usuário cadastre uma sessão para um filme, informando o horário, a quantidade de ingressos disponíveis e o valor do ingresso.

4. Listar Sessões Disponíveis
Exibir uma lista com todas as sessões disponíveis, incluindo o filme, o horário, a quantidade de ingressos disponíveis e o valor do ingresso.

5. Comprar Ingresso
Permitir que o comprador selecione uma sessão e compre um ou mais ingressos para essa sessão, informando seus dados pessoais (nome, CPF, telefone e e-mail) e finalizando a compra. Ao finalizar a compra, a quantidade de ingressos disponíveis para a sessão deve ser atualizada e o ingresso deve ser adicionado à lista de ingressos do comprador.

6. Ver Ingressos Comprados
Exibir a lista de ingressos comprados pelo comprador, incluindo o ID do ingresso, o filme, a sessão, o horário, o valor e a disponibilidade.

7. Cancelar Compra de Ingresso
Permitir que o comprador cancele a compra de um ingresso. Ao cancelar a compra, a quantidade de ingressos disponíveis para a sessão deve ser atualizada e o ingresso deve ser removido da lista de ingressos do comprador.

### Tecnologias

Para criar essa aplicação, utilizei as seguintes tecnologias:

Banco de Dados: Postgres,
Linguagem de Programação: Typescript,
Framework Web e biblioteca: Express e Node.js,
ORM: Prisma ORM,
Gerenciador de Containers: Docker,
Autenticação: JWT.

## 🛠️ Instruções de execução

Siga as instruções abaixo para rodar o projeto em seu ambiente local:

1. Certifique-se de ter o Node.js instalado em seu computador. Você pode baixar a versão mais recente do Node.js em https://nodejs.org.

2. Clone este repositório em seu computador ou faça o download do código fonte.

3. Abra o terminal e navegue até o diretório raiz do projeto.

4. Instale as dependências do projeto(Utilize npm ou yarn) executando o seguinte comando:

```bash
  npm install ou yarn install
```

5. Após a conclusão da instalação das dependências, inicie o servidor de desenvolvimento local com o comando:

```bash
  npm dev ou yarn dev
```

6. O servidor local será iniciado e você poderá acessar o projeto no seu navegador através do seguinte endereço:

```bash
  http://localhost:3333
```

Essa URL abaixo, faz a conexão com o Banco de Dados, certifique de passar as informações corretas no arquivo .env.exemple da aplicação.
```
DATABASE_URL=postgres://username:password@localhost:5432/nome_do_banco
```

Certifique-se de substituir username e password pelas suas credenciais de acesso ao banco de dados PostgreSQL.

Execute as migrações do banco de dados para criar as tabelas necessárias:

```
npx prisma migrate dev ou yarn prisma migrate dev
```

Para rodar a aplicação execute o seguinte comando:

```
npm run dev ou yarn dev
```

O CinePrime estará disponível em http://localhost:3333. Você pode acessar esta URL em seu navegador para utilizar o projeto.

