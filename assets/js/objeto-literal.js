let personaje = {
  nombre: "Frank Tineo",
  codeName: "Ironman",
  live: false,
  age: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  subs: ["Mark-1", "Mark-4", "HulkBuster"],
  adress: {
    zip: "10880, 90265",
    locate: "Malibu, California",
  },
  "ultima-Pelicula": "Infiniti War",
};
console.log(personaje);
console.log("nombre ", personaje.nombre);
console.log("nombre ", personaje["nombre"]); //otra forma de buscarlo
console.log("Edad ", personaje.edad);

console.log("coords", personaje.coords);
console.log("lat", personaje.coords.lat);

console.log("No. Trajes", personaje.subs.length); // trae el nuimero de trajes que tiene ironman
console.log("Ultimo Traje", personaje.subs[personaje.subs.length - 1]);

const x = "live";
console.log("live", personaje[x]);
console.log("Ultima Pelicula", personaje["ultima-Pelicula"]);
