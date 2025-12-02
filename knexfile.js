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
      host: "",
      user: "",
      password: "",
      database: "",
      port: ""
    },
    migrations: {
      directory: path.join("./src/database/knex/migrations")
    }
  },
  production: {
    client: "pg",
    connection: {
      connectionString: "",
      ssl: { rejectUnauthorized: false }
    }
  }
};

export default Config;