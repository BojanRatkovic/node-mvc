import { Router } from "express";
import PostsController from "../controllers/posts.controller";
import Route from "../interfaces/route.interface";

class IndexRoute implements Route {
  public path = "/posts";
  public router = Router();
  public PostsController = new PostsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.PostsController.getAllPosts);
  }
}

export default IndexRoute;
