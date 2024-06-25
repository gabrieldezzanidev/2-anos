document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    if (name === 'Maria Julia' && password === '12082022') {
        errorMessage.style.color = 'green';
        errorMessage.textContent = 'Login bem-sucedido!';
        setTimeout(function() {
            window.location.href = 'index.html'; 
        }, 1000);
    } else {
        errorMessage.style.color = 'red';
        errorMessage.textContent = 'Nome ou senha incorretos!';
    }
});