
# Visão Geral

Nessa aplicação de cinema, teremos as entidades "Filme", "Sessão", "Ingresso" e "Comprador". Os filmes estarão associados a uma ou mais sessões, e cada sessão terá um horário e uma quantidade de ingressos disponíveis. Os compradores poderão comprar ingressos para as sessões disponíveis, informando seus dados pessoais.

## Funcionalidades

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

Para criar essa aplicação, você pode utilizar as seguintes tecnologias:

Banco de Dados: Postgres
Linguagem de Programação: Typescript
Framework Web e biblioteca: Express e Node.js
ORM: Prisma ORM
Gerenciador de Containers: Docker
Autenticação: JWT

