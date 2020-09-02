function hola(nombre, miCallback) {
  console.log('Hola, soy una funccion asincrona.');
  setTimeout(() => {
    console.log('Hola ' + nombre);
    miCallback(nombre);
  }, 2000);
}

function hablar(callbackHablar) {
  setTimeout(() => {
    console.log('Bla bla bla bla...');
    callbackHablar();
  }, 1000);
}

function adios(nombre, otroCallback) {
  setTimeout(() => {
    console.log('Adios ' + nombre);
    otroCallback();
  }, 1000);
}

console.log('Iniciando proceso...');
hola('Jaime', (nombre) => {
  hablar(() => {
    adios(nombre, () => {
      console.log('Teminando proceso...');
    });
  });
});
