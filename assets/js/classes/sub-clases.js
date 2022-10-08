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
  constructor(
    nombre = "Sin Nombre",
    codigo = "Sin Codigo",
    frase = "sin frase"
  ) {
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
class Heroe extends Persona {
  clan = "sin clan";
  constructor(
    nombre = "Sin Nombre",
    codigo = "Sin Codigo",
    frase = "sin frase"
  ) {
    super(nombre, codigo, frase);
    this.clan = "Los avengers";
  }
}
const spider = new Heroe("Frank", "Enddy", "Soy amigable vecino");
// const spider = new Heroe();
console.log(spider);

spider.quienSoy();
