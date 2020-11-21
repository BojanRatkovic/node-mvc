import { getRepository } from "typeorm";
import Post from "../entities/post.entity";

class PostsService {
  public async getAllPosts(): Promise<Post[]> {
    return await getRepository(Post).find();
  }

  // ... others methods
}

export default PostsService;
