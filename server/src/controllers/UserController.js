// importar o banco de dados para estutdos
const database = require('../database');

module.exports = {
    // Função para criar um usuario
    async create(req, res) {
        console.log("Recebi do Insomnia:", req.body);
        // O req.body é onde vêm os dados que o usuáriao enviou , NOME, EMAIL E SENHA
        const { name, email, password } = req.body;

        /*Validação 
          Se NÃO tiver nome OU NÃO tiver email OU NÃO tiver senha...
        */
        if (!name || !email || !password) {
            return res.status(400).json({ error: "Preencha todos os campos!" });
        }
        // Criar objeto usando os dadod que vieram do req,body
        const novoUser = {
            id: Date.now(),
            name: name,
            email: email,
            password: password
        };

        // Guardar no Banco (.push)
        database.users.push(novoUser);

        // Responder
        return res.json(novoUser);
    },

    // Função para LISTAR
    async index(req, res) {
        // Retorna a lista completo do banco
        return res.json(database.users);
    }
};