import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ListarFilmesService {
  async execute(_req: Request, res: Response) {
    const filmes = await prisma.filme.findMany({
      select: {
        filmeId: true,
        nome: true,
        genero: true,
        duracao: true,
        tipodeSessao: true,
        imagem: true,
      },
    });

    return res.status(200).json(filmes);
  }
}
