//alert("Hola este es mi Javascript");

let nombre = "Eli";

var nombre1 = "Eli";

const nombre2 = "Eli";

console.log(nombre);
console.log(nombre1);
console.log(nombre2);

//SELECCIONAR ELEMENTOS

let contenidoTitulo = "nombre";
let titulo = document.querySelector(".logo .fuente-")
titulo.innerHTML = contenidoTitulo;

//CONDICIONALES
let textoTitulo = titulo.innerTet;
console.log(textoTitulo = titulo.innerText);
console.log(textoTitulo);

if(textoTitulo == "nombre"){
    titulo.innerHTML = "otro;"
} else {
    console.log("no se cumple");
}