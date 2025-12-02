// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

const Config = {

  development: {
    client: 'sqlite3',
    connection: {
      host: process.env.HOST,
      user: process.env.USER,
      password: process.env.PASSWORD,
      database: process.env.DATA_BASE,
      port: process.env.PORT
    },
    migrations: {
      directory: path.join("./src/database/knex/migrations")
    }
  },
  production: {
    client: "pg",
    connection: {
      connectionString: process.env.URL_DB,
      ssl: { rejectUnauthorized: false }
    }
  }
};

export default Config;