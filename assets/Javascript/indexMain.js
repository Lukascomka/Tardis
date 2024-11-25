// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
});

//botão pesquisas
let btn = document.querySelectorAll(".btn-pesquisar");
let pesquisar = document.querySelectorAll(".itempesquisa");

btn.forEach((button) => {
  button.addEventListener("click", () => {
    pesquisar.forEach((item) =>
      item.classList.contains("active") ? item.classList.remove("active") : null
    );
    button.parentElement.classList.add("active");
  });
});

// Botão projeto futuro brilhante - opções
let cols = document.querySelectorAll(".colx");
cols.forEach((col) => {
  col.addEventListener("click", () => {
    cols.forEach((item) =>
      item.classList.contains("active") ? item.classList.remove("active") : null
    );
    col.classList.add("active");
  });
});

// Botão empresa-projeto
let buttonm = document.querySelectorAll(".button-more");
buttonm.forEach((button) => {
  button.addEventListener("click", () => {
    buttonm.forEach((item) =>
      item.classList.contains("active") ? item.classList.remove("active") : null
    );
    button.classList.add("active");
  });
});

document.getElementById("btn-projeto").addEventListener("click", () => {
  window.location.href = "projetoFuturo.html";
});

document.getElementById("btn-empresa").addEventListener("click", () => {
  window.location.href = "sobreNos.html";
});
