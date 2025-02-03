document.addEventListener("DOMContentLoaded", (event) => {
let amigos = [];
let seleccionAmigos = [];
let recursividad = true;
let resultado = "";

//agrega y verifica la lista de los amigos 
function agregaAmigo() {
    //Obtiene el texto en el input amigo y lo pasa amayusculas
    const nombreAmigo = document.getElementById('amigo').value.toUpperCase(); 
    if (nombreAmigo == "") {
        alert("Por favor, inserte su nombre.");
    } else if (amigos.includes(nombreAmigo)) {
        alert(`No puedes repetir el amigo "${nombreAmigo}"`);
    } else{
        amigos.push(nombreAmigo);
        console.log(`${amigos}`);
    }
    actualizarLista();
    limpiarNombre();
}
//muentra la lista de amigo
function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizar
    for (let i = 0; i < amigos.length; i++) {
        lista.innerHTML += `<li>${amigos[i]}</li>`; 
    }
}
function limpiarNombre() {
    document.querySelector('#amigo').value = "";
}
//realiza el sorteo del amigo secreto
function sorteo() {
    const listado = amigos.length; 
    console.log(listado);
    return Math.floor(Math.random() * listado);
}
function verificarResultado() {
    let colocarAmigos = amigos.length - 1;
    let colocarSeleccion = seleccionAmigos.length - 1;
    console.log(`Numero de amigos ${colocarAmigos} y amigos seleccionados ${colocarSeleccion}`);
    if (colocarAmigos == colocarSeleccion) {
        alert ("Ya no hay mas amigos disponibles. Reinicie la pagina para otro formulario");
        recursividad = false;
        document.getElementById("botonAmigo").setAttribute('disabled',true);
        document.getElementById('botonSorteo').setAttribute('disabled',true);
    }
}
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay nombres agregados para sortear");
    }else if (amigos.length <= 2) {
        alert("Ingresar mas nombres para hacer el sorteo");
    }else {
       /* if (recursividad) {
            do {
                resultado = amigos[sorteo()];
            } while (seleccionAmigos.includes(resultado)); //repetir hasta enconrtrar un nombre no seleccionado
            seleccionAmigos.push(resultado);
            console.log(`${resultado}`);
            relevarAmigo();
            verificarResultado(); //verifica si ya no hay mas amigos disponibles 
        }*/
    }        
}
function reiniciarSorteo() {
    amigos = [];
    seleccionAmigos = [];
    recursividad = true;
    resultado = "";
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = "";
    document.getElementById("botonAmigo").removeAttribute('disabled');
    document.getElementById("botonsorteo").removeAttribute('disabled');
    alert("Sorteo reiniciado. Agrega nuevos nombres.")
}
function relevarAmigo() {
    let listaAmigo = document.getElementById("resultado");
    listaAmigo.innerHTML=`<li> Tu amigo secreto es <strong>${resultado}</strong></li>`;
}
});
