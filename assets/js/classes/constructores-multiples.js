class Persona {
  static porObjeto({ nombre, apellido, pais }) {
    return new Persona(nombre, apellido, pais);
  }
  constructor(nombre, apellido, pais) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.pais = pais;
  }

  getInfo() {
    console.log(`Info: ${this.nombre}, ${this.apellido}, ${this.pais} `);
  }
}
const nombre1 = "Frank",
  apellido1 = "Tineo",
  pais1 = "Rep. Dom";

const fher = {
  nombre: "Fernando",
  apellido: "Herrera",
  pais: "Costa Rica",
};

const persona1 = new Persona(nombre1, apellido1, pais1);
const persona2 = Persona.porObjeto(fher);
persona1.getInfo();
persona2.getInfo();
