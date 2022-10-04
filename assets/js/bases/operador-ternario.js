const dia = 1;
const horaActual = 11;

let horaApertura;
let mensaje; // esta abierto o cerrado Hoy abrimos a XX

// if (dia === 0 || dia === 6) {
// if ([0, 6].includes(dia)) {
//   console.log("fin de semana");
//   horaApertura = 9;
// } else {
//   console.log("dia de semana");
//   horaApertura = 11;
// }
horaApertura = [0, 6].includes(dia) ? 9 : 11;

// if (horaActual >= horaApertura) {
//   mensaje = "Esta Abierto";
// } else {
//   mensaje = `Esta Cerrado hoy abrimos a ${horaApertura}`;
// }
mensaje =
  horaActual >= horaApertura
    ? "Esta Abierto"
    : `Esta Cerrado hoy abrimos a ${horaApertura}`;

console.log({ horaApertura, mensaje });
