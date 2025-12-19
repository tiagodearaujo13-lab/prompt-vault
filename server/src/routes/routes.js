const express = require('express');
const router = express.Router();

// Rota de teste  o endereço final será: http://localhost:3000/api/
router.get('/', (req, res) => {
    return res.json({ message: "Sistema PromtVault Operacional" });
});

// Exportar para o server.js conseguir usar
module.exports = router;