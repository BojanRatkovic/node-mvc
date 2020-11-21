import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("post")
class Post {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({
    length: 100,
  })
  name!: string;
}

export default Post;
