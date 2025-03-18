// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = [];

function agregarAmigo() {

    let nombre = document.getElementById('amigo');
    let listaAmigos = document.querySelector("ul");
       
    amigos.push(nombre.value);
    console.log(amigos);

    let liAmigo = document.createElement('li');
    
    for (let i=0; i<amigos.length; i++){

        liAmigo.textContent = amigos[i];
        listaAmigos.appendChild(liAmigo);
    
   }

   limpiarCaja();

}

function limpiarCaja() {

    document.querySelector('#amigo').value ='';

}
   
function sortearAmigo(){
  

    let amigoSecreto = Math.floor(Math.random()* amigos.length);

    console.log(amigoSecreto);

    let resultado = document.querySelector("ul");
    let liGanador = document.createElement('li');

    resultado.textContent = "";

    liGanador.textContent = amigos[amigoSecreto];
    resultado.appendChild(liGanador);

}