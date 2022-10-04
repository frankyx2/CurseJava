// function crearPersona(nombre, apellido) {
//   return { nombre, apellido };
// }

const crearPersona2 = (nombre, apellido) => ({ nombre, apellido });

// const persona = crearPersona2("Frank", "Tineo");
// console.log(persona);

// function imprimeArgumentos() {
//   console.log(arguments);
// }

const imprimeArgumentos2 = (...args) => {
  //   console.log(args);
  return args;
};
const [casado, vivo, nombre, saludo] = imprimeArgumentos2(
  10,
  true,
  false,
  "Frank",
  "Hola"
);

console.log({ casado, vivo, nombre, saludo });

const { apellido: nuevoApellido } = crearPersona2("Frank", "Tineo");
console.log(nuevoApellido);

let frank = {
  nombre: "Frank Tineo",
  codeName: "Ironman",
  live: false,
  //age: 40,
  subs: ["Mark-1", "Mark-4", "HulkBuster"],
};

// const imprimePropiedades = (personaje) => {
//   console.log(personaje.nombre);
//   console.log(personaje.codeName);
//   console.log(personaje.live);
//   console.log(personaje.age);
//   console.log(personaje.subs);
// };

const imprimePropiedades = ({ nombre, codeName, live, age = 15, subs }) => {
  console.log({ nombre });
  console.log({ codeName });
  console.log({ live });
  console.log({ age });
  console.log({ subs });
};

imprimePropiedades(frank);
