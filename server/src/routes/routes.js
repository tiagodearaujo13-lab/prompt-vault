const express = require('express');
const router = express.Router();

// Importar o Controlador
const UserController = require('../controllers/UserController');

// Rota de teste  o endereço final será: http://localhost:3000/api/
router.get('/', (req, res) => {
    return res.json({ message: "Sistema PromtVault Operacional" });
});

// Rotas de Cadastro
// O POST é usado para criar coisas
router.post('/users', UserController.create);

// Rota para LISTAR usuários (GET)
router.get('/users', UserController.index);

// Rota de LOGIN (POST) 
// POST para dados sensíveis passwords
router.post('/login', UserController.login);

// Exportar para o server.js conseguir usar
module.exports = router;

