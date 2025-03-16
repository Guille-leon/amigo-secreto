// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];

function agregarAmigo() {
   
    let miAmigo = document.getElementById('amigo').value;
   
    listaAmigos.push(miAmigo);
    console.log(listaAmigos,length);
    //console.log(listaAmigos[0]);
    amigos();
    limpiarCaja();
   
    return

}

function limpiarCaja() {

    document.querySelector('#amigo').value ='';

}

function amigos() {

    let listado = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    for (const amigo of listaAmigos) {
        
        let nombre = document.createElement('li');
        listaAmigos.innerHTML += '';
        nombre.innerText = amigo;
        
        listado.appendChild(nombre);
      
    } 

    return

}

agregarAmigo();



