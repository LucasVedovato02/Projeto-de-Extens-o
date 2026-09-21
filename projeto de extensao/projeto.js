const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmarSenha = document.getElementById("confirmarSenha");
const botaoPrincipal = document.getElementById("botaoPrincipal");
const botaoCadastro = document.getElementById("botaoCadastro");
const botaoVoltar = document.getElementById("botaoVoltar");
const textoCadastro = document.getElementById("textoCadastro");
const textoEsqueciSenha = document.getElementById("textoEsqueciSenha");
const confirmarSenhaBox = document.getElementById("confirmarSenhaBox");

botaoCadastro.addEventListener("click", function() {

console.log("cliquei no cadastro");

    confirmarSenhaBox.style.display = "block";

    botaoPrincipal.textContent = "Cadastrar";

    botaoCadastro.style.display = "none";
    botaoVoltar.style.display = "block";
    textoCadastro.style.display = "none";
    textoEsqueciSenha.style.display = "none";

});

botaoVoltar.addEventListener("click", function() {
console.log("cliquei no voltar");

        textoCadastro.style.display = "block";
    confirmarSenhaBox.style.display = "none";
    textoEsqueciSenha.style.display = "block";
        botaoCadastro.style.display = "block";
        botaoVoltar.style.display = "none";


botaoPrincipal.textContent = "Entrar";


    });