import { Router } from "express";
import IndexController from "../controllers/index.controller";
import Route from "../interfaces/route.interface";

class IndexRoute implements Route {
  public path = "/status";
  public router = Router();
  public indexController = new IndexController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.indexController.index);
  }
}

export default IndexRoute;
