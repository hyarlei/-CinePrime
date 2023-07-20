import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface ICarrinho {
  carrinhoId: number;
}

export class CancelarCarrinhoService{
  async deleteReserva({ carrinhoId }: ICarrinho, req: Request, res: Response) {

    console.log(carrinhoId);

      await prisma.carrinho.delete({
        where: {
          id: Number(carrinhoId),
        },
      });

      return res.json({ message: 'Carrinho excluída com sucesso' });
  }
}
