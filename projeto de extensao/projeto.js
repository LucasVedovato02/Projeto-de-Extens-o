const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmarSenha = document.getElementById("confirmarSenha");
const botaoPrincipal = document.getElementById("botaoPrincipal");
const botaoCadastro = document.getElementById("botaoCadastro");
const botaoVoltar = document.getElementById("botaoVoltar");
const textoCadastro = document.getElementById("textoCadastro");
const textoEsqueciSenha = document.getElementById("textoEsqueciSenha");
const confirmarSenhaBox = document.getElementById("confirmarSenhaBox");
const tituloLogin = document.getElementById("tituloLogin");
const mensagem = document.getElementById("mensagem");



botaoCadastro.addEventListener("click", function () {

    console.log("cliquei no cadastro");

    confirmarSenhaBox.style.display = "block";

    botaoPrincipal.textContent = "Cadastrar";
    tituloLogin.textContent = "Cadastro";

    botaoCadastro.style.display = "none";
    botaoVoltar.style.display = "block";
    textoCadastro.style.display = "none";
    textoEsqueciSenha.style.display = "none";
});

botaoPrincipal.addEventListener("click", async function () {

    if (validarEmail()) {

        if (password.value.length < 8) {
            console.log("senha inválida");

        } else {

            if (confirmarSenha.value === "") {
                console.log("Digite a senha novamente");

            } else {

                if (password.value !== confirmarSenha.value) {

                    console.log("senha inválida");

                    password.value = "";
                    confirmarSenha.value = "";
                    password.focus();

                } else {

                    localStorage.setItem("emailCadastrado", email.value);

                    const dados = email.value + password.value;
                    const encoder = new TextEncoder();
                    const junto = encoder.encode(dados);

                    const hash = await crypto.subtle.digest("SHA-256", junto);

                    const bytes = new Uint8Array(hash);

                    const hashHex = Array.from(bytes)
                        .map(byte => byte.toString(16).padStart(2, "0"))
                        .join("");

                    localStorage.setItem("senhaHash", hashHex);

                    mensagem.textContent = "Cadastro realizado com sucesso!";
                    voltarLogin();
                }
            }
        }

    }

});

email.addEventListener("blur", function () {
    if(validarEmail()){
        console.log("email válido");
        email.style.border = "";
        mensagem.textContent = "";

        if(email.value === localStorage.getItem("emailCadastrado") ){
            email.style.border = "";
        mensagem.textContent = "";

        }else{
            email.style.border = "2px solid red";
            mensagem.textContent = "Email não cadastrado";
        }

    }else{email.style.border = "2px solid red";
        mensagem.textContent = "Digite um e-mail válido";
    }
})

password.addEventListener("input", async function () {

if (tituloLogin.textContent === "Login"){
    botaoPrincipal.disabled = true;
    const dados = email.value + password.value;
    const encoder = new TextEncoder();
    const junto = encoder.encode(dados);

    const hash = await crypto.subtle.digest("SHA-256", junto);

                    const bytes = new Uint8Array(hash);

                    const hashHex = Array.from(bytes)
                        .map(byte => byte.toString(16).padStart(2, "0"))
                        .join("");
                        const hashSalvo = localStorage.getItem("senhaHash")
                        if(hashHex === hashSalvo){
                            botaoPrincipal.disabled = false;
                            mensagem.textContent = "Botão habilitado";
                        }else{
                            botaoPrincipal.disabled = true;
                            mensagem.textContent = "Botão desabilitado";
                        }

}else{
    botaoPrincipal.disabled = false;
}

});

function voltarLogin() {
    textoCadastro.style.display = "block";
    confirmarSenhaBox.style.display = "none";
    textoEsqueciSenha.style.display = "block";
    botaoCadastro.style.display = "block";
    botaoVoltar.style.display = "none";

    botaoPrincipal.textContent = "Entrar";
    tituloLogin.textContent = "Login";
}

botaoVoltar.addEventListener("click", function () {
    console.log("cliquei no voltar");
    voltarLogin();
});

function validarEmail() {
    const valorEmail = email.value;

    if (valorEmail.includes("@")) {
    } else {
        console.log("Inclua um @ no endereço de email");
    }

    const posicaoArroba = valorEmail.indexOf("@");
    if (posicaoArroba > 0) {
    } else {
        return false;
    }

    if (posicaoArroba === valorEmail.length - 1) {
        return false;
    } else {
    }

    const posicaoPonto = valorEmail.indexOf(".", posicaoArroba + 1);
    if (posicaoPonto > posicaoArroba) {
    } else {
        return false;
    }

    if (valorEmail.length - posicaoPonto - 1 < 2) {
        return false;
    } return true;
};












