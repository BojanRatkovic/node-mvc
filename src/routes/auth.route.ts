import { Router } from "express";

import AuthController from "../controllers/auth.controller";
import Route from "../interfaces/route.interface";

class AuthRoute implements Route {
  public path = "/auth";
  public router = Router();
  public authController = new AuthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.authController.getAllUsers);
    this.router.post(`${this.path}/register`, this.authController.register);
    // this.router.get(`${this.path}/login`, this.authController.login);
  }
}

export default AuthRoute;
