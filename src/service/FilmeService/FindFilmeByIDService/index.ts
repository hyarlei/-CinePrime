import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export class ListarFilmePorIdService {
  async execute(req: Request, res: Response) {

    const { id } = req.params;

    const filme = await prisma.filme.findUnique({
      where: {
        filmeId: Number(id),
      },
      select: {
        filmeId: true,
        nome: true,
        genero: true,
        duracao: true,
      },
    });

    return res.status(200).json(filme);
  }
}
