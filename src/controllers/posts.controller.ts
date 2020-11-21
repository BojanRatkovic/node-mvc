import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";

import PostsService from "../services/posts.service";
import Post from "../entities/post.entity";

class PostsController {
  public postsService = new PostsService();

  public getAllPosts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const getAllPostsData: Post[] = await this.postsService.getAllPosts();
      res.status(200).json({ data: getAllPostsData, message: "All posts" });
    } catch (error) {
      next(error);
    }
  };
}

export default PostsController;
