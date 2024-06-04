// script.js

function enviarDados() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const gender = document.getElementById('gender').value;
    const country = document.getElementById('country').value;

    const formData = {
        name: name,
        email: email,
        password: password,
        gender: gender,
        country: country
    };

    fetch('URL_DA_SUA_API', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
        }
        return response.json();
    })
    .then(data => {
        console.log('Dados enviados com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro:', error);
    });
}

const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    enviarDados();
});
