import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

interface IAddCarrinhoRequest {
  filmeId: number;
  compradorId: number;
}

export class AddCarrinhoService {
  async execute(req: Request, res: Response) {
    const { compradorId } = req.params;
    const { filmeId }: IAddCarrinhoRequest = req.body;

      // Buscar filme
      const filme = await prisma.filme.findUnique({
        where: {
          filmeId,
        },
      });

      // Validar filme
      if (!filme) {
        return res.status(400).json({ message: "Filme não encontrado" });
      }

      // Criar Reserva
      const reserva = await prisma.reserva.create({
        data: {
          filmeId,
          compradorId: Number(compradorId),
          quntIngresso: 1,
        },
      });

      // Validar reserva
      if (!reserva) {
        return res.status(500).json({ message: "Erro ao criar reserva" });
      }

      // Criar Carrinho
      const carrinho = await prisma.carrinho.create({
        data: {
          compradorId: Number(compradorId),
          reservaId: Number(reserva.id),
          valorTotal: filme.valor,
        },
      });

      // Validar carrinho
      if (!carrinho) {
        return res.status(500).json({ message: "Erro ao criar carrinho" });
      }

      return res.status(200).json({ message: "Filme adicionado ao carrinho" });
    }
  }
