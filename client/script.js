// Selecionar os elementos da tela 

const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const mensagemErro = document.getElementById('mensagem-erro');
const btnLogin = document.getElementById('btn-login');

// Ouvir o enveto de click ou enter
loginForm.addEventListener('submit', async (event) => {
    // Impede que a página recarregue
    event.preventDefault();

    // Limpar mensagens de erro antigas e muda texto do botão
    mensagemErro.innerText = "";
    btnLogin.innerText = "CARREGANDO...";
    btnLogin.disable = true;

    // Pegar os dados que o usuário digitou
    const dadosLogin = {
        email: emailInput.value,
        password: passwordInput.value
    };

    // Enviar para o backend O FETCH
    try {
        // E estamos a dizer, vai a este endereço e usa o método POST e leva esta JSON
        const response = await fetch('http://localhost:3000/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dadosLogin)
        });

        const resultado = await response.json();

        // Verificar a resposta
        if (response.ok) {
            // Mensagem sucesso (200)
            mensagemErro.style.color = '#faff00';
            mensagemErro.innerText = "LOGIN ACEITO. A REDIRECIONAR...";

            // Simular dashboard
            setTimeout(() => {
                alert("Bem-Vindo", + resultado.user.namr + "!");

            }, 1000);

        } else {
            // Erro (401 404)
            mensagemErro.style.color = "#ff003c";
            mensagemErro.innerText = "ERRO: " + resultado.error;
        }
    } catch (error) {
        // Devolver botão ao normal
        mensagemErro.innerText = "ERRO: SERVIDOR OFFLINE";
    } finally {
        // Devolver botão ao normal
        btnLogin.innerText = "ENTRAR [ENTER]";
        btnLogin.disable = false;
    }
});