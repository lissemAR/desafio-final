// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos =[];
const nombreInicio = document.getElementById('nombreInicio');
const adicionar =  document.getElementById('adicionar');
const listaAmigos = document.getElementById('listaAmigos');
const sorteo = document.getElementById('sorteo');
const resultado = document.getElementById('resultado');

adicionar.addEventListener('click', () => {
    const nombre = nombreInicio.value.trim();

    if (nombre === ''){
        alert('Por favor ingrese su nombre.');
        return;
    }

    amigos.push(nombre);
    nombreInicio.value = '';
    actualizarlista();

});

sorteo.addEventListener('click', () => {
    if (amigos.length === 0) {
        alert('No hay nombres en la lista.');
        return;
    }
    const amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    resultado.textContent = `Tu amigo secreto es: ${amigoSecreto}`;

});

function actualizarlista() {
    listaAmigos.innerHTML = '';
    amigos.forEach(amigo => {
        const li = document.createElement('li');
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    })
}