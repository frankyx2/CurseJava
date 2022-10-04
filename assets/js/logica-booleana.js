const regresaTrue = () => {
  console.log("regresa true");
  return true;
};
const regresaFalse = () => {
  console.log("regresa false");
  return false;
};

console.warn("not o negacion");
console.log(true);
console.log(!true);
console.log(!false);

console.log(!regresaFalse());
console.warn("And");
console.log(true && true); //true
console.log(true && !false); //true
console.log("4 Condiciones", true && true && true && false);
// regresaTrue();

console.log("++++++++++++++++++");
console.log(regresaFalse() && regresaTrue()); //false
console.log(regresaTrue() && regresaFalse()); //false

console.log("++++++++++++++++++");
regresaTrue() && regresaFalse();
regresaFalse() && regresaTrue();

console.warn("Or");

console.log(true || false);
console.log(false || false);
console.log(regresaFalse() || regresaTrue()); //false
console.log(regresaTrue() || regresaFalse()); //false

console.log("4 Condiciones", true || true || true || false);

console.warn("Asignaciones");
const soyUndefine = undefined;
const soyNull = null;
const soyFalse = false;

const a1 = false && "Hola mundo" && 150;
a2 = "hola" && "Mundo" && soyFalse;
const a3 = soyFalse || "ya no soy Falso";
const a4 = soyFalse || soyUndefine || soyNull || "ya no soy Falso de nuevo";
const a5 =
  soyFalse || soyUndefine || regresaTrue() || "ya no soy Falso de nuevo";
console.log({ a1, a2, a3, a4, a5 });

if (true || true || true || false) {
  console.log("hacer algo");
} else {
  console.log("hacer otra cosa");
}
