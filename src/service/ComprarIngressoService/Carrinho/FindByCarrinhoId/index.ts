import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ICarrinho {
  userId: number;
}

export class FindCarrinhoByIdService{
  async findById({ userId }: ICarrinho, req: Request, res: Response) {

    if (!userId) {
      return res.status(400).json({ error: 'userId não informado' });
    }

    const carrinhoCadastrado = await prisma.carrinho.findUnique({
      where: {
        id: userId,
      },
    });

    if (!carrinhoCadastrado) {
      return res.status(404).json({ error: 'Carrinho não encontrado' });
    }

    return res.status(201).json(carrinhoCadastrado);
  }
}
