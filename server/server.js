const express = require("express");
const cors = require("cors");

// Importar as rotas (O menu)
const routes = require("./src/routes/routes");

// Inicializar aplicação
const app = express();

// Configurações globais
app.use(express.json()); // Permiti que o servidor entenda JSON vital para APIs
app.use(cors()); // Permite acesso externo

/*
  Usar Rotas
  dica Pro: colocar prefixo /api assim todos os links serão: localhoster:3000/api/...

*/
app.use("/api", routes);

// Inicialização do servidor
const PORT = 3000;
app.listen(PORT, () => {
    console.log(` Server is running on https://localhost:${PORT}`);
});