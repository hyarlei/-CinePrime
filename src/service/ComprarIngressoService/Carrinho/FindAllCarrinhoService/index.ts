import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class ListarCarrinhoService {
    async listarCarrinho(_req: Request, res: Response) {
      try {
        const carrinhos = await prisma.carrinho.findMany({
          select: {
            id: true,
            comprador: {
              select: {
                id: true,
                nome: true,
                cpf: true,
                email: true,
                telefone: true,
              }
            },
            reserva: {
              select: {
                filme: {
                  select: {
                    nome: true,
                    duracao: true,
                    valor: true,
                  }
              }
            },
          },
            valorTotal: true,
          }
        });

        return res.status(200).json(carrinhos);
      } catch (error) {
        console.log(error);
        return res.status(500).json({ error: 'Erro ao listar carrinhos' });
      }
    }
  }
