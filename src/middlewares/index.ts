import cors from "cors";
import { urlencoded } from "body-parser";
import { Application, json } from "express";

export default (app: Application) => {
  app.use(cors());
  app.use(json());
  app.use(urlencoded({ extended: false }));
};
