function saludar(nombre) {
  //   console.log({ arguments });
  //   console.log("Hola " + nombre);
  return [1, 2, 3, 4, 5];

  //Esto nunca se va a ejecutar
  console.log("Cogigo despues del return");
}

// const saludar2 = function (nombre) {
//   console.log("Hola " + nombre);
// };

const saludarFlecha = (nombre) => {
  console.log("Hola " + nombre);
};
const saludarFlecha2 = () => {
  console.log("Hola mundo");
};

const retornoSaludar = saludar("Frank", 40, true, "costa rica");
// console.log(retornoSaludar);
// saludarFlecha("Frank");

function sumar(a, b) {
  return a + b;
}

// const sumarFlecha = (a, b) => {
//   return a + b;
// };
const sumarFlecha = (a, b) => a + b;

// function getAleatorio() {
//   return Math.random();
// }
const getAleatorio2 = () => Math.random();

console.log(getAleatorio2());
