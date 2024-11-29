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
	window.open("projetoFuturo.html","_blank");
  });
  
  document.getElementById("btn-empresa").addEventListener("click", () => {
	window.open("sobreNos.html", "_blank");
  });
  




  <header class="header-menu-principal">
  <nav class="menu">
	<a href="../index.html">Página Inicial</a>
	<a href="../projetoFuturo.html">Futuro Brilhante</a>
	<div class="logo-wrapper"></div>
	<div class="logo-container">
	  <a href="home.html">
		<img src="../assets/IMG/logo thardiss.png"
		  alt="Logo da empresa Tardis. Representado por um globo terrestre, um avião dando a volta da esquerda para direita e embaixo o nome Tardis em destaque." />
	  </a>
	</div>
	<a href="sobreNos.html">Sobre Nós</a>
	<a href="Passagens.html">Passagens Aéreas</a>
	<a href="login.html">
	  <img src="../assets/IMG/user.png" alt="Icon de Login" class="user-icon" />
	</a>
  </nav>
</header>