import "reflect-metadata";

import express from "express";
import { createConnection } from "typeorm";

import Route from "./interfaces/route.interface";

class App {
  public app: express.Application;
  public port: number | string;
  public env: boolean;

  constructor(routes: Route[]) {
    this.env = process.env.NODE_ENV === "production" ? true : false;
    this.port = process.env.PORT || 3000;

    this.app = express();

    /**
     * Default template engine is set to ejs
     */
    this.app.set("view engine", "ejs");

    /**
     * If needed change default path to views dir.
     */
    this.app.set("views", `${__dirname}/views`);

    this.initializeRoutes(routes);
    this.connectToDatabase();
  }

  public listen() {
    this.app.listen(this.port, () => {
      console.log(`🚀 App listening on the port ${this.port}.`);
    });
  }

  private initializeRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use("/", route.router);
    });
  }

  private connectToDatabase() {
    createConnection()
      .then(() => {
        console.log("🥞 Database successfully connected.");
      })
      .catch((error) => console.log(error));
  }
}

export default App;
