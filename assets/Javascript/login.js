document.addEventListener("DOMContentLoaded", function() {
    const criarButton = document.getElementById("criar");
    const inscText = document.getElementById("insc");
    const txtLogin = document.getElementById("txtLogin");
    const checkContainer = document.querySelector(".checkContainer");
    const entrarButton = document.getElementById("entrar");
    const setasButton = document.getElementById("setas");
    const senhaInput = document.getElementById("senha");
    const usuarioInput = document.getElementById("usuario")

    const usuarios = [];

    // Pop-up
    const pop = document.getElementById("popUp");
    const fechaPop = document.querySelector(".fechar");

    // Função para mostrar o Pop-up
    function mostrarPopUp() {
        pop.style.display = "block";
    }

    // Função para fechar o Pop-up
    function fecharPop() {
        pop.style.display = "none";

        // Limpa os inputs após salvar
        usuarioInput.value = "";
        const emailInput = document.getElementById("email");
        if (emailInput) emailInput.value = ""; // Limpa o campo de email, se existir
        senhaInput.value = ""; // Limpa o campo de senha
    }

    // Função para alternar entre os estados
    function alternarEstado() {
        
        senhaInput.value = "";
        usuarioInput.value = "";

        // Verifica se o campo de email já existe
        const emailContainer = document.getElementById("inputEmail");
        if (emailContainer) {
            emailContainer.remove(); // Remove o campo de email se existir
        }
        
        if (inscText.textContent === "Cadastre-se") {
            inscText.textContent = "Novo Login";
            criarButton.textContent = "FAZER LOGIN";
            txtLogin.textContent = "CADASTRE-SE";

            // Oculta o checkContainer
            checkContainer.style.display = "none";

            // Altera o texto do botão "ENTRAR" para "CADASTRAR"
            entrarButton.textContent = "CADASTRAR";

            // Cria um novo contêiner para o input de Email
            const emailContainer = document.createElement("div");
            emailContainer.id = "inputEmail"; // Adiciona um ID ao contêiner
            emailContainer.style.position = "relative"; // Para posicionar a imagem

            const inputEmail = document.createElement("input");
            inputEmail.type = "email"; // Tipo do input
            inputEmail.placeholder = "EMAIL"; // Placeholder
            inputEmail.id = ("email"); // ID do novo input
            
            // Adiciona o input ao contêiner
            emailContainer.appendChild(inputEmail);

            // Cria a imagem para o input de Email
            const carta = document.createElement("img");
            carta.id = "carta";
            carta.src = "./assets/IMG/carta.png"; 
            carta.alt = "Email Icon"; // Texto alternativo

            // Adiciona a imagem ao contêiner
            emailContainer.appendChild(carta);

            // Insere o novo input dentro do contêiner grid
            const gridContainer = document.querySelector(".card");
            gridContainer.appendChild(emailContainer); // Adiciona o novo input ao grid
        } else {
            inscText.textContent = "Cadastre-se";
            criarButton.textContent = "CRIAR CONTA";
            txtLogin.textContent = "FAÇA LOGIN";

            // Mostra o checkContainer novamente
            checkContainer.style.display = "flex";

            // Altera o texto do botão "Entrar" de volta para "Entrar"
            entrarButton.textContent = "ENTRAR";    
        }
    }

    function salvarDados(usuarioValue, emailValue, senhaValue) {

        // Cria um objeto com os dados
        const usuario = {
            usuario: usuarioValue,
            email: emailValue,
            senha: senhaValue
        };

        // Adiciona o objeto ao array de usuários
        usuarios.push(usuario);
    }    

    // Adiciona o evento de clique ao botão "criar"
    criarButton.addEventListener("click", alternarEstado);

    // Adiciona o evento de clique ao botão "setas"
    setasButton.addEventListener("click", alternarEstado);

    // Adiciona o evento de clique ao botão "CADASTRAR"
    entrarButton.addEventListener("click", function() {

         // Obtém os valores dos inputs
        const usuarioValue = usuarioInput.value.trim();
        const emailInput = document.getElementById("email"); // Atualiza a referência ao emailInput
        const emailValue = emailInput ? emailInput.value.trim() : ""; // Verifica se emailInput existe
        const senhaValue = senhaInput.value.trim();

        if (usuarioValue === "" || senhaValue === "") {
            alert("Por favor, preencha todos os campos."); // Alerta se algum campo estiver vazio
            return; // Interrompe a execução se algum campo estiver vazio

        } else if (entrarButton.textContent === "ENTRAR") {

            // Redireciona para a página desejada
            window.location.href = ""; // redirect

        } else if (entrarButton.textContent === "CADASTRAR") {

            if (usuarioValue === "" || emailValue === "" || senhaValue === "") {
                alert("Por favor, preencha todos os campos."); // Alerta se algum campo estiver vazio
                return; // Interrompe a execução se algum campo estiver vazio
            }
            
            // Verifica se todos os campos estão preenchidos

            salvarDados(usuarioValue, emailValue, senhaValue);
            mostrarPopUp(); // Mostra o Pop-Up apenas quando "CADASTRAR" é clicado
            setasButton.classList.add("setas-desativado"); // Adiciona a classe para desativar o botão "setas"
        }
    });
    
    // Adiciona o evento de clique ao botão de fechar (X) do Pop-Up
    fechaPop.addEventListener("click", function(){
        fecharPop();
        setasButton.classList.remove("setas-desativado");
    });

    // Fecha o Pop-up se o usuário clicar fora do conteúdo do Pop-up
    window.addEventListener("click", function(event) {
        if (event.target === pop) {
            fecharPop();
            setasButton.classList.remove("setas-desativado"); // Remove a classe ao fechar o popUp
        }
    })

});