function saludar(nombre) {
  console.log({ arguments });
  console.log("Hola " + nombre);
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

// saludar("Frank", 40, true, "costa rica");
saludarFlecha("Frank");
