let a = 10,
  b = a;
a = 30;
console.log({ a, b });

let juan = { nombre: "Juan" };
let ana = { ...juan };
ana.nombre = "ana";
console.log(juan, ana);

const cambiaNombre = ({ ...persona }) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "peter" };
let tony = cambiaNombre(peter);

console.log({ peter, tony });

//arreglo

const frutas = ["manzana", "melon", "cereza"];

console.time("slice");
const otrasFrutas = frutas.slice();
console.timeEnd("slice");

console.time("spread");
const otrasFrutas2 = frutas.slice();
console.timeEnd("spread");

otrasFrutas.push("pera");
console.table({ frutas, otrasFrutas });
