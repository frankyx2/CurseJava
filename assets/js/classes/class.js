class Persona {
  static _conteo = 0;
  static get conteo() {
    return Persona._conteo + " instancias";
  }

  static mensaje() {
    console.log("Hola a todos");
  }

  nombre = "";
  codigo = "";
  frase = "";
  comida = "";
  constructor(nombre, codigo, frase) {
    this.nombre = nombre;
    this.codigo = codigo;
    this.frase = frase;

    Persona._conteo++;
  }

  set setComidaFavorita(comida) {
    this.comida = comida.toUpperCase();
  }
  get getComidaFavorita() {
    return `Comida Favorita de ${this.nombre} es ${this.comida}`;
  }

  quienSoy() {
    console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
  }
  miFrase() {
    console.log(`${this.codigo} dice: ${this.frase}`);
  }
}
const spider = new Persona("Frank", "Enddy", "Soy amigable vecino");
const ironMan = new Persona("Tony", "Iron man", "Yo soy IronMan");
// Persona._conteo = 2;

// console.log(ironMan);
// spider.miFrase();
// spider.setComidaFavorita = "Pastel de cereza";
// console.log(spider);
// console.log(spider.getComidaFavorita);

console.log("conteo statico", Persona.conteo);
Persona.mensaje();
