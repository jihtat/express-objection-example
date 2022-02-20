import { Application } from "express";

export default (app: Application) => {
  app.get("/", (req, res) => {
    res.json({ message: "API Running ! " });
  });
};
