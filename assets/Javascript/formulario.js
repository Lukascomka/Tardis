// Função para validar email
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Função para validar telefone celular (formato: (99) 99999-9999)
function isValidCelular(celular) {
    return /^\(\d{2}\) \d{5}-\d{4}$/.test(celular);
}

// Função para validar telefone residencial (formato: (99) 9999-9999)
function isValidTelefone(telefone) {
    return /^\(\d{2}\) \d{4}-\d{4}$/.test(telefone);
}

// Função para aplicar máscara de telefone celular
function maskCelular(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 11) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d{5})(\d)/, '$1-$2');
    }
    input.value = value;
}

// Função para aplicar máscara de telefone residencial
function maskTelefone(input) {
    let value = input.value.replace(/\D/g, '');
    if (value.length <= 10) {
        value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
        value = value.replace(/(\d{4})(\d)/, '$1-$2');
    }
    input.value = value;
}

// Função para validar campo individual
function validateField(input) {
    let isValid = true;

    // Remove classes de erro anteriores
    input.classList.remove('error');

    // Verifica se o campo está vazio
    if (!input.value.trim()) {
        input.classList.add('error');
        isValid = false;
    } else {
        // Validações específicas por tipo de campo
        switch (input.id) {
            case 'email':
                if (!isValidEmail(input.value)) {
                    input.classList.add('error');
                    isValid = false;
                }
                break;
            case 'celular':
                if (!isValidCelular(input.value)) {
                    input.classList.add('error');
                    isValid = false;
                }
                break;
            case 'telefone':
                if (!isValidTelefone(input.value)) {
                    input.classList.add('error');
                    isValid = false;
                }
                break;
        }
    }

    return isValid;
}

// Função para verificar se todo o formulário é válido
function isFormValid() {
    const inputs = document.querySelectorAll('form input');
    let isValid = true;

    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });

    return isValid;
}

// Event Listeners para os campos do formulário
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const inputs = form.querySelectorAll('input');
    const submitButton = form.querySelector('button[type="submit"]');

   
    inputs.forEach(input => {
      
        input.addEventListener('blur', () => {
            validateField(input);
            submitButton.disabled = !isFormValid();
        });

        // Validação durante a digitação
        input.addEventListener('input', () => {
            // Aplica máscaras para campos de telefone
            if (input.id === 'celular') {
                maskCelular(input);
            } else if (input.id === 'telefone') {
                maskTelefone(input);
            }

            validateField(input);
            submitButton.disabled = !isFormValid();
        });
    });

    // Listener para envio do formulário
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        if (isFormValid()) {
            
            const modal = document.getElementById('successModal');
            modal.style.display = 'flex';
        }
    });
});


function closeModal() {
    const modal = document.getElementById('successModal');
    modal.style.display = 'none';
  
    document.getElementById('cadastroForm').reset();
}


window.onclick = function (event) {
    const modal = document.getElementById('successModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}