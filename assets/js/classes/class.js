class Persona {
  nombre = "";
  codigo = "";
  frase = "";
  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;
  }
}
const spider = new Persona("Frank", "Enddy", "Soy amigable vecino");
const ironMan = new Persona("Tony", "Iron man", "Yo soy IronMan");

console.log(spider);
console.log(ironMan);
