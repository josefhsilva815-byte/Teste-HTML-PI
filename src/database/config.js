import knex from "knex";
import Config from "../../knexfile.js";

export const conn = knex(Config.development)

conn.raw("SELECT 1")
.then(() => {
    console.log("✅ Conexão estabelecida com o servidor");
}).catch((error) => {
    console.error("❌ Erro eo tentar se conectar com o Banco de Dados", error.message);
})