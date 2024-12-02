// Swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2500, //milisegundos
    disableOnInteraction: false,
  },
  breakpoints: {
    200: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
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
  window.open("projetoFuturo.html","_blank");
});

document.getElementById("btn-empresa").addEventListener("click", () => {
  window.open("sobreNos.html", "_blank");
});
