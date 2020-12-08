import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("user")
class User {
  @PrimaryGeneratedColumn({ type: "int" })
  id!: number;

  @Column({
    type: "varchar",
    length: 25,
  })
  first_name!: string;

  @Column({
    type: "varchar",
    length: 25,
  })
  last_name!: string;

  @Column({
    type: "varchar",
    length: 25,
  })
  email!: string;

  @Column({
    type: "varchar",
    length: 25,
  })
  password!: string;
}

export default User;
