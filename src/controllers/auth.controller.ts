import { NextFunction, Request, Response } from "express";

import AuthService from "../services/auth.service";
import User from "../entities/user.entity";

class AuthController {
  public authService = new AuthService();

  public getAllUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const getAllUsersData: User[] = await this.authService.getAllUsers();
      res.status(200).json({
        data: getAllUsersData,
        message: "All users successfully retrived",
      });
    } catch (error) {
      next(error);
    }
  };

  public register = async (req: Request, res: Response, next: NextFunction) => {
    const user = req.body;

    console.log(req.body);

    // try {
    //   const signUpUserData: User = await this.authService.register(user);
    //   res
    //     .status(201)
    //     .json({ data: signUpUserData, message: "Successfully logged in" });
    // } catch (error) {
    //   next(error);
    // }
  };
}

export default AuthController;
