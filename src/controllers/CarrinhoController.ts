import { Request, Response } from 'express';

import { AddCarrinhoService } from '../service/ComprarIngressoService/Carrinho/AddCarrinhoService'
import { ListarCarrinhoService } from '../service/ComprarIngressoService/Carrinho/FindAllCarrinhoService'
import { CancelarCarrinhoService } from '../service/ComprarIngressoService/Carrinho/DeleteCarrinho/index';
import { FindCarrinhoByIdService } from '../service/ComprarIngressoService/Carrinho/FindByCarrinhoId/index';

interface Carrinho {

}

export class AddCarrinho {
    async execute(req: Request, res: Response) {

        const addCarrinhoService = new AddCarrinhoService();

        const carrinho = await addCarrinhoService.execute(req, res);

        return carrinho;
  }
}

export class ListarCarrinho {
  async execute(req: Request, res: Response) {

    const listarCarrinhoService = new ListarCarrinhoService();

    const carrinho = await listarCarrinhoService.listarCarrinho(req, res);

    return carrinho;
  }
}

 export class FindCarrinhoById {
  async execute(req: Request, res: Response) {

    const {userId} = req.params;

    const findCarrinhoByIdService = new FindCarrinhoByIdService();

    const carrinho = await findCarrinhoByIdService.findById(
        {userId: Number(userId)},
        req,
        res
      );

    return carrinho;
  }
}

export class CancelarCarrinho {
  async execute(req: Request, res: Response) {

    const {carrinhoId} = req.params;

    const cancelarCarrinhoService = new CancelarCarrinhoService();

    const carrinho = await cancelarCarrinhoService.deleteReserva(
        {carrinhoId: Number(carrinhoId)},
        req,
        res
      );

    return carrinho;
  }
}

