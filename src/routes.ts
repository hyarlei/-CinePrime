import { Router } from "express";

export const routes = Router();

//Filme
import { FilmeController, DeleteFilmeController, ListarFilmesController, ListarFilmePorIdController, AtualizarFilmeController } from "./controllers/FilmeController";

//Login
import { AuthController } from "./controllers/LoginController";

//Ingressos
import { AddCarrinho, ListarCarrinho, CancelarCarrinho, FindCarrinhoById } from "./controllers/CarrinhoController";

//User
import { CreateUserController, DeleteUserController, ListarUsersController, ListarUsersEmailController, findUserById, UpdateUserController } from "./controllers/UserController";

// Middleware
import { AuthMiddleware } from "./middlewares/UserMiddleware";
import { AdminMiddleware } from "./middlewares/AdminMiddleware";

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const listarUsersController = new ListarUsersController();
const listarUserController = new ListarUsersEmailController();
const findUserByIdController = new findUserById();
const updateUserController = new UpdateUserController();

const filmeController = new FilmeController();
const deletarFilme = new DeleteFilmeController();
const listarFilmes = new ListarFilmesController();
const listarFilmePorId = new ListarFilmePorIdController();
const atualizarFilme = new AtualizarFilmeController();

const addCarrinho = new AddCarrinho();
const listarCarrinho = new ListarCarrinho();
const findCarrinhoById = new FindCarrinhoById();
const cancelarCarrinho = new CancelarCarrinho();

const authController = new AuthController();

// Rotas Login
routes.post("/user", createUserController.store);
routes.delete("/user/:id", AdminMiddleware, deleteUserController.delete);
routes.get("/user", AdminMiddleware, listarUsersController.index);
routes.get("/user", AdminMiddleware, listarUserController.listarUsers);
routes.get("/user/:id", AdminMiddleware, findUserByIdController.find);
routes.put("/user/:id", AdminMiddleware, updateUserController.update);

// Rotas Filme
routes.post("/filme", AdminMiddleware, filmeController.store);
routes.delete("/filme/:id", AdminMiddleware, deletarFilme.delete);
routes.get("/filme", AdminMiddleware, listarFilmes.index);
routes.get("/filme/:id", AdminMiddleware, listarFilmePorId.index);
routes.put("/filme/:id", AdminMiddleware, atualizarFilme.update);

// Rotas Carrinho
routes.post("/add/:compradorId", AdminMiddleware, addCarrinho.execute);
routes.get("/listar", AdminMiddleware, listarCarrinho.execute);
routes.get("/listar/:compradorId", AdminMiddleware,findCarrinhoById.execute);
routes.delete("/delete/:carrinhoId", AdminMiddleware, cancelarCarrinho.execute);

// Rotas de autenticação
routes.post("/auth", authController.execute);
