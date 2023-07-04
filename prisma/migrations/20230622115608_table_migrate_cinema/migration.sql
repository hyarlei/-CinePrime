-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "nome" TEXT,
    "cpf" TEXT NOT NULL,
    "telefone" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "isAdmin" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Filme" (
    "filmeId" SERIAL NOT NULL,
    "imagem" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "genero" TEXT NOT NULL,
    "duracao" INTEGER NOT NULL,
    "dataHora" TEXT NOT NULL,
    "ingressosDisponiveis" INTEGER NOT NULL,
    "valor" DOUBLE PRECISION NOT NULL,
    "tipodeSessao" TEXT NOT NULL,

    CONSTRAINT "Filme_pkey" PRIMARY KEY ("filmeId")
);

-- CreateTable
CREATE TABLE "Ingresso" (
    "id" TEXT NOT NULL,
    "reservaId" INTEGER NOT NULL,

    CONSTRAINT "Ingresso_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "id" SERIAL NOT NULL,
    "valorTotal" DOUBLE PRECISION NOT NULL,
    "compradorId" INTEGER NOT NULL,
    "reservaId" INTEGER NOT NULL,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reserva" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "filmeId" INTEGER NOT NULL,
    "compradorId" INTEGER NOT NULL,
    "quntIngresso" INTEGER NOT NULL,

    CONSTRAINT "Reserva_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Filme_nome_key" ON "Filme"("nome");

-- CreateIndex
CREATE UNIQUE INDEX "Carrinho_reservaId_key" ON "Carrinho"("reservaId");

-- CreateIndex
CREATE UNIQUE INDEX "Carrinho_compradorId_id_key" ON "Carrinho"("compradorId", "id");

-- CreateIndex
CREATE UNIQUE INDEX "Reserva_id_key" ON "Reserva"("id");

-- AddForeignKey
ALTER TABLE "Ingresso" ADD CONSTRAINT "Ingresso_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "Reserva"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinho" ADD CONSTRAINT "Carrinho_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Carrinho" ADD CONSTRAINT "Carrinho_reservaId_fkey" FOREIGN KEY ("reservaId") REFERENCES "Reserva"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_compradorId_fkey" FOREIGN KEY ("compradorId") REFERENCES "User"("id") ON DELETE NO ACTION ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reserva" ADD CONSTRAINT "Reserva_filmeId_fkey" FOREIGN KEY ("filmeId") REFERENCES "Filme"("filmeId") ON DELETE NO ACTION ON UPDATE CASCADE;
