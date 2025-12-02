const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

//=== ROTAS: ===//


//===========================================================//

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
})