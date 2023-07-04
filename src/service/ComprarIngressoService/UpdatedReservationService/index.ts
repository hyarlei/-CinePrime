import { Request, Response } from 'express';  
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class AtualizarCarrinhoService {
  async atualizarCarrinho(req: Request, res: Response) {
    const { id } = req.params;
    const { compradorId, valorTotal, reservaId } = req.body;

    const carrinho = await prisma.carrinho.update({
      where: {
        id: Number(id),
      },
      data: {
        compradorId: Number(compradorId),
        valorTotal: Number(valorTotal),
        reservaId: Number(reservaId)
      },
    });

    return res.status(200).json(carrinho);
  }
}
