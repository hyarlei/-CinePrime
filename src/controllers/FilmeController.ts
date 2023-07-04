import { Request, Response } from "express";
import { CreatFilmeService } from "../service/FilmeService/CreateFilmeService"
import { DeletarFilmeService } from "../service/FilmeService/DeleteFilmeService"
import { ListarFilmesService } from "../service/FilmeService/FindAllFilmeService"
import { ListarFilmePorIdService } from "../service/FilmeService/FindFilmeByIDService"
import { AtualizarFilmeService } from "../service/FilmeService/UpdateFilmeService"

interface IFilme {
  nome: string;
  genero: string;
  imagem: string;
  classificacaoIndicativa: string;
  duracao: number;
  dataHora: string;
  ingressosDisponiveis: number;
  tipodeSessao: string;
  valor: number;
}

export class FilmeController {
  async store(req: Request, res: Response) {
    const { nome, tipodeSessao, imagem, genero, duracao, dataHora, ingressosDisponiveis, valor}: IFilme = req.body;

    const createFilmeService = new CreatFilmeService();

    const filme = await createFilmeService.execute(
      { nome, tipodeSessao, genero, imagem, duracao, dataHora, ingressosDisponiveis, valor },
      req,
      res
    );

    return filme;
  }
}
export class DeleteFilmeController {
  async delete(req: Request, res: Response) {

    const {id} = req.params;

    const deleteFilmeService = new DeletarFilmeService();

    const filme = await deleteFilmeService.execute(
      {id: Number(id)},
      req,
      res
    );

    return filme;
  }
}

export class ListarFilmesController {
  async index(req: Request, res: Response) {

    const listarFilmesService = new ListarFilmesService();

    const filme = await listarFilmesService.execute(
      req,
      res
    );

    return filme;
  }
}

export class ListarFilmePorIdController {
  async index(req: Request, res: Response) {

    const listarFilmePorIdService = new ListarFilmePorIdService();

    const filme = await listarFilmePorIdService.execute(
      req,
      res
    );

    return filme;
  }
}

export class AtualizarFilmeController {
  async update(req: Request, res: Response) {
    const { nome, tipodeSessao, imagem, genero, duracao }: IFilme = req.body;

    const atualizarFilmeService = new AtualizarFilmeService();

    const filme = await atualizarFilmeService.execute(
      { nome, tipodeSessao, imagem, genero, duracao },
      req,
      res
    );

    return filme;
  }
}
