const fher = {
  nombre: "Fernando",
  edad: 30,
  imprimir() {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  },
};
// const frank = {
//   nombre: "Frank",
//   edad: 24,
//   imprimir() {
//     console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
//   },
// };
// fher.imprimir();

function Persona(nombre, edad) {
  console.log("se ejecuto esta linea ");
  this.nombre = nombre;
  this.edad = edad;
  this.imprimir = function () {
    console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`);
  };
}

const maria = new Persona("Maria", 18);
const frank = new Persona("Frank", 22);
console.log(maria);
maria.imprimir();
frank.imprimir();
