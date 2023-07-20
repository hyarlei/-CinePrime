import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ICreateIngressoRequest {
  reservaId: number;
  compradorId: number;
}

export class CreateIngressoService {
  async execute(req: Request, res: Response) {
    const { reservaId } = req.params;

    const ingresso = await prisma.ingresso.create({
      data: {
        reservaId: Number(reservaId),
      },
    });

    if (!ingresso) {
      return res.status(500).json({ message: "Erro ao criar ingresso" });
    }

    return res.status(200).json({ message: "Ingresso criado com sucesso" });
  }
}
