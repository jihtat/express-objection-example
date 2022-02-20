import express, { Application } from "express";
import { config } from "dotenv";
import registerRouter from "./router";
import registerMiddlewares from "./middlewares";
import { setupDB } from "./database";
import Branch from "./database/Models/branch";

const app: Application = express();

registerMiddlewares(app);
registerRouter(app);

config();

setupDB();

const PORT: string | number = process.env.PORT || 5000;
const ENV: string = process.env.NODE_ENV || "development";

app.get("/branch", async (req, res) => {
  try {
    // const branchs = await await Branch.query().withSchema("public");
    const allBranches = await Branch.query().union(
      Branch.query().withSchema("public_clone")
    );
    const branch = await Branch.query()
      .withSchema("public")
      .select("branch", "branch_id")
      .whereIn("branch", ["Civil"]);
    return res.status(200).send(branch);
  } catch (error) {
    console.error(error);
    return res.status(500).send("error!");
  }
});
app.listen(PORT, async () => {
  console.log(
    ` 📡 Backend server: ` + ` Running in ${ENV} mode on port ${PORT}`
  );
});
