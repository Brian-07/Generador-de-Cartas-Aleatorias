/* eslint-disable */
import "bootstrap";
import "./style.css";

function generadorPintas() {
  const pintas = ["♦", "♥", "♠", "♣"];
  let pintasIndex = Math.floor(Math.random() * pintas.length);

  if (pintas[pintasIndex] == "♥" || pintas[pintasIndex] == "♦") {
    document.getElementById("carta").style.color = "red";
  } else {
    document.getElementById("carta").style.color = "black";
  }
  const head = (document.getElementById("head").innerHTML =
    pintas[pintasIndex]);
  const footer = (document.getElementById("footer").innerHTML = head);
}

function generadoNumeros() {
  const numeros = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let numerosIndex = Math.floor(Math.random() * numeros.length);

  const body = (document.getElementById("body").innerHTML =
    numeros[numerosIndex]);
}
function cambiarCarta() {
  let fondoColor = document.getElementById("carta");
  fondoColor.style.background = "white";
}
let boton = document.getElementById("boton");
boton.addEventListener("click", cambiarCarta);
boton.addEventListener("click", generadoNumeros);
boton.addEventListener("click", generadorPintas);

setInterval(() => {
  cambiarCarta(), generadoNumeros(), generadorPintas();
}, 10000);

function cambiarAncho() {
  let numAncho = document.getElementById("numAncho").value;
  let carta = document.getElementById("carta");
  carta.style.width = numAncho + `px`;
  console.log(carta);
}
function cambiarAlto() {
  let numAlto = document.getElementById("numAlto").value;
  let carta = document.getElementById("carta");
  carta.style.height = numAlto + `px`;
  console.log(carta);
}

let boton2 = document.getElementById("boton2");
boton2.addEventListener("click", cambiarAncho);
boton2.addEventListener("click", cambiarAlto);
