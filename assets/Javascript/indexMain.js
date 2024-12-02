var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  breakpoints: {
    800: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  loop: true,
  autoplay: {
    delay: 2000, //milisegundos
    disableOnInteraction: false,
  },
});

// Atualizar Swiper ao redimensionar a janela
window.addEventListener('resize', function () {
  swiper.update();
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
