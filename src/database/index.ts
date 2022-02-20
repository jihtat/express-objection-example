import { Model, knexSnakeCaseMappers } from "objection";
import knex from "knex";

export function setupDB() {
  const pgKnex = knex({
    client: "pg",
    connection: process.env.DB_URL,
    ...knexSnakeCaseMappers,
  });
  Model.knex(pgKnex);
}
