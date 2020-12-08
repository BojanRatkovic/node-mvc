import { Router } from "express";
import PostsController from "../controllers/posts.controller";
import Route from "../interfaces/route.interface";

class PostsRoute implements Route {
  public path = "/posts";
  public router = Router();
  public postsController = new PostsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.postsController.getAllPosts);
  }
}

export default PostsRoute;
