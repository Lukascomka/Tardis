document.addEventListener("DOMContentLoaded", function () {
    const emailInput = document.getElementById("floatingInputInvalid");

    
    emailInput.addEventListener("blur", function () {
        if (!emailInput.validity.valid) {
            emailInput.classList.add("is-invalid");
        } else {
            emailInput.classList.remove("is-invalid");
        }
    });

    emailInput.addEventListener("input", function () {
        if (!emailInput.validity.valid) {
            emailInput.classList.add("is-invalid");
        } else {
            emailInput.classList.remove("is-invalid");
        }
    });
});
