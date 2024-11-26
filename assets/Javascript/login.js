document.addEventListener("DOMContentLoaded", function() {
    const criarButton = document.getElementById("criar");
    const inscText = document.getElementById("insc");
    const txtLogin = document.getElementById("txtLogin");
    const checkContainer = document.querySelector(".checkContainer");
    const entrarButton = document.getElementById("entrar");
    const setasButton = document.getElementById("setas"); // Adicionando o botão "setas"

    // Função para alternar entre os estados
    function alternarEstado() {
        if (inscText.textContent === "Inscreva-se") {
            inscText.textContent = "Novo Login";
            criarButton.textContent = "FAZER LOGIN";
            txtLogin.textContent = "CADASTRE-SE";

            // Oculta o checkContainer
            checkContainer.style.display = "none";

            // Altera o texto do botão "ENTRAR" para "CADASTRAR"
            entrarButton.textContent = "CADASTRAR";
        } else {
            inscText.textContent = "Inscreva-se";
            criarButton.textContent = "CRIAR CONTA";
            txtLogin.textContent = "FAÇA LOGIN";

            // Mostra o checkContainer novamente
            checkContainer.style.display = "flex";

            // Altera o texto do botão "Entrar" de volta para "Entrar"
            entrarButton.textContent = "ENTRAR"; 
        }
    }

    // Adiciona o evento de clique ao botão "criar"
    criarButton.addEventListener("click", alternarEstado);

    // Adiciona o evento de clique ao botão "setas"
    setasButton.addEventListener("click", alternarEstado);
});