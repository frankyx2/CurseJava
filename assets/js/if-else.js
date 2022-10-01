let a = 0;

if (a >= 10) {
  console.log("a es mayor a 10");
} else {
  console.log("A Es menor a 10");
}
console.log("Fin del program");

const hoy = new Date();
let dia = hoy.getDay();
console.log(dia);

if (dia === 0) {
  console.log("Hoy es domingo");
} else if (dia === 1) {
  console.log("Hoy es lunes");
} else if (dia === 2) {
  console.log("hoy es martes");
} else {
  console.log("Hoy no es Domingo, lunes o martes ");
}
