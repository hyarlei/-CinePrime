import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Ifilme {
  imagem: string;
  nome: string;
  genero: string;
  tipodeSessao: string;
  duracao: number;
  ingressosDisponiveis: number;
  valor: number;
  dataHora: string;
}

export class CreatFilmeService {
  async execute(
    { dataHora, tipodeSessao, imagem, nome, genero, duracao, ingressosDisponiveis, valor }: Ifilme,
    req: Request,
    res: Response
  ) {

    if (!dataHora || !tipodeSessao || !imagem || !nome || !genero || !duracao || !ingressosDisponiveis || !valor) {
      return res.status(400).json({ message: "Preencha todos os campos" });
    }

    if (duracao <= 0 || ingressosDisponiveis < 0 || valor <= 0) {
      return res.status(400).json({ message: "Valores numéricos inválidos" });
    }

    const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/;
    if (!dateRegex.test(dataHora)) {
      return res.status(400).json({ message: "Formato de data inválido" });
    }


    const hasFilme = await prisma.filme.findFirst({
      where: {
        nome: String(nome),
        dataHora: String(dataHora),
      },
    });

    if (hasFilme) {
      return res.status(400).json({ message: "Filme já existe" });
    }

    const filme = await prisma.filme.create({
      data: {
        dataHora,
        tipodeSessao,
        genero,
        nome,
        duracao,
        imagem,
        ingressosDisponiveis,
        valor,
      },
    });

    return res.status(201).json({ Message: "Filme created successfully" });
  }
}
