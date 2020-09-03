console.log('Algo en consola!');
console.error('An error occurred!');
console.warn('This is a warn!');

var table = [
  { Name: 'Jose Jaime', LastName: 'Figueroa' },
  { Name: 'Abraham', LastName: 'Figueroa Gonzalez' },
  { Adress: 6788, street: 'Quinta Ernani' },
  { Adress: 6788, street: 'Quinta Mayorga' },
];

console.table(table);

console.group('Inicia el la conversacion');
console.log('Bra;lkasd');
console.log('mosadfjs');
console.log('poasdkadh');
console.log('adios..');
console.groupEnd();

console.time("Hola");
console.timeEnd('Hola');