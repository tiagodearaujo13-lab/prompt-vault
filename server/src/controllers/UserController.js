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
    },

    // Função de LOGIN
    async login(req, res) {
        console.log("Tentativa de Login:", req.body);

        const { email, password } = req.body;

        // Procurar o usuario pelo email
        // .find() percorre a array e devolve o primeiro item que bater certo
        const useEncontrado = database.users.find(user => user.email === email);

        // se não encontrou ninguém com esse email
        if (!useEncontrado) {
            return res.status(400).json({ error: "Ususario não encontrato!" });
        }

        // Verificar password
        // texto simples para estudo
        if (useEncontrado.password !== password) {
            return res.status(401).json({ error: "Password incorreto!" });
        }

        return res.json({
            message: "Login realizado com sucesso!",
            user: {
                id: useEncontrado.id,
                name: useEncontrado.name,
                email: useEncontrado.email
            }
        });
    }
};