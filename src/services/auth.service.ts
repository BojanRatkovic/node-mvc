import { getRepository } from "typeorm";
import { hash, compare } from "bcrypt";
import User from "../entities/user.entity";
import HttpException from "../exceptions/http.exception";
import { isEmpty } from "lodash";

class AuthService {
  public async getAllUsers(): Promise<User[]> {
    return await getRepository(User).find();
  }

  public async register(user: User): Promise<User> {
    if (isEmpty(user)) throw new HttpException(400, "Bad request");

    const findUser = await getRepository(User).findOne({
      where: { email: user.email },
    });

    if (findUser) {
      throw new HttpException(409, `You're email ${user.email} already exists`);
    }

    const hashedPassword = await hash(user.password, 10);
    const createUserData: User = getRepository(User).create({
      ...user,
      password: hashedPassword,
    });

    return createUserData;
  }

  public async login(user: User): Promise<User> {
    if (isEmpty(user)) throw new HttpException(400, "Bad request");

    const findUser = await getRepository(User).findOneOrFail({
      where: { email: user.email },
    });

    const isPasswordMatching: boolean = await compare(
      user.password,
      findUser.password
    );

    if (!findUser || isPasswordMatching) {
      throw new HttpException(409, `Bad credentials`);
    }

    return findUser;
  }
}

export default AuthService;
