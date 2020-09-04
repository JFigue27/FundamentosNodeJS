let suma = 0;

// console.time("bucle");
for (let i = 0; i < 1000000000000000000; i++) {
  suma += 1;
}
console.log(suma);
// console.timeEnd("bucle");

// let suma2 = 1;

// console.time("bucle2");
// for (let j = 0; j < 100000000000; j++) {
//   suma2 += 1;
// }
// console.timeEnd("bucle2");

console.time('Hola');
console.timeEnd('Hola');
