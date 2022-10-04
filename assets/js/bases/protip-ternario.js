const elMayor = (a, b) => (a > b ? a : b);
const tieneMembresia = (miembro) => (miembro ? "2 Dolar " : "10 Dolar");

console.log(elMayor(20, 15));
console.log(tieneMembresia(false));

const amigo = false;
const amigosArr = [
  "peter",
  "Saul",
  "Tony",
  amigo ? "Thor" : "Loki",
  //(() => "Nick Fury")(),
];
console.log({ amigosArr });

const nota = 100;
const grado =
  nota >= 95
    ? "A+"
    : nota >= 90
    ? "A"
    : nota >= 85
    ? "B+"
    : nota >= 80
    ? "B"
    : nota >= 75
    ? "C+"
    : nota >= 70
    ? "C"
    : "F Reprovado";

console.log(nota, grado);
