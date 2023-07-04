import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface Iuser {
  id: number;
}
export class DeletarFilmeService {
    async execute({id}:Iuser,req: Request, res: Response) {

      const ingressoExists = await prisma.reserva.findMany({
        where: {
          filmeId: id,
        },
    });

    if (ingressoExists) {
      await prisma.reserva.deleteMany({
        where: {
          filmeId: id,
        },
      });
    }

    const filmeExists = await prisma.filme.findUnique({
        where: {
          filmeId: id,
        },
    });

    if (!filmeExists) {
        return res.status(400).json({ error: "Filme não encontrado" });
    }

    await prisma.filme.delete({
      where: {
        filmeId: Number(id),
      },
    });

    return res.status(200).json({ message: "Filme deletado com sucesso" });
  };
}
