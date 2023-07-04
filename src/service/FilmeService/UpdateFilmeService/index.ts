import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Ifilme {
  nome: string;
  genero: string;
  imagem: string;
  duracao: number;
  tipodeSessao: string;
}

export class AtualizarFilmeService {
  async execute({ nome, tipodeSessao, imagem, genero, duracao }: Ifilme, req: Request, res: Response) {
    const { id } = req.params;

    const filme = await prisma.filme.update({
      where: {
        filmeId: Number(id),
      },
      data: {
        nome,
        genero,
        tipodeSessao,
        imagem,
        duracao,
      },
    });

    return res.status(200).json(filme);
  }
}
