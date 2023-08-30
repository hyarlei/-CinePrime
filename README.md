<h1 align="center">Cine🍿Prime</h1>

:smiley::rocket:Seja Seja bem-vindo ao repositório do backend da CinePrime. Aqui, iremos guiá-lo para que você consiga instalar e configurar o ambiente de desenvolvimento. Certifique-se de ter previamente o Node.js e o Git instalados em seu computador.

**01: Como baixar  o projeto inicial**

Clone o repositório em seu computador

    git clone https://github.com/hyarlei/-CinePrime.git

Acesse o diretório do projeto

    cd Cinema

Instale as dependências do projeto usando o gerenciador de pacotes npm ou yarn:

    npm install ou yarn install

**02: Como configurar o Docker**

Primeiro Certifique-se de ter o Docker instalado em sua maquina.

> **Windows** https://docs.docker.com/desktop/install/windows-install/
>**Linux** https://docs.docker.com/desktop/install/linux-install/

Na pasta raiz do seu projeto execute o seguinte comando para iniciar o docker

    docker-compose up -d

Pronto, seu docker está configurado.

**03: Configurar o Arquivo .env**

Defina as seguintes variáveis de ambiente no arquivo .env e edite retirando o nome .env.example:

    DATABASE_URL="postgres://username:password@localhost:5432/nome_do_banco"

Certifique-se de substituir username e password pelas suas credenciais de acesso ao banco de dados PostgreSQL.

**04: Execute as migrações do banco de dados para criar as tabelas necessárias:**

    npx prisma migrate dev
		    ou
    yarn prisma migrate dev

Execute o projeto

    npm run dev

	    ou

    yarn dev

Sucesso :rocket::rocket::rocket: petwalk-api estará disponível em http://localhost:3333/. Você pode acessar esta URL em seu navegador para utilizar o projeto.

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
