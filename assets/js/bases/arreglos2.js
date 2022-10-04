let juegos = ["Zelda", "Mario", "Fortnite"];
console.log("Largo: ", juegos.length);

let primero = juegos[0];
let ultimo = juegos[juegos.length - 1];
console.log(primero, " ", ultimo);

juegos.forEach((elemento, indice, err) => {
  console.log(elemento, indice, err);
});

let nuevaLongitud = juegos.push("F-Zero");
console.log(nuevaLongitud, juegos);

nuevaLongitud = juegos.unshift("Fire Emblem");
console.log(nuevaLongitud, juegos);

let juegoBorrado = juegos.pop();
console.log(juegoBorrado, juegos);

let pos = 1;
let juegosborrados = juegos.splice(pos, 2);
console.log(juegosborrados, juegos);

let fortniteIndex = juegos.indexOf("Fortnite");
console.log(fortniteIndex);
