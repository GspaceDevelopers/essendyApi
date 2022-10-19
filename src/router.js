import { Router } from "express";
import ProdutosController from "./controllers/ProdutosController";

const routes = new Router();

//rotas principais

routes.post("/produtos", ProdutosController.store);
routes.get("/produtos", ProdutosController.index);

//mateus - category

export default routes;

//routes.get('/produtos', QueryesController.getallcolors)
