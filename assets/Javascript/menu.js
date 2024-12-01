document.querySelector('.hamburger').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.menu').classList.toggle('active');
    document.querySelector('.logo-wrapper').classList.toggle('active'); // Controla a visibilidade da logo-wrapper
    document.querySelector('.logo-container').classList.toggle('active'); // Controla a visibilidade da logo
});



