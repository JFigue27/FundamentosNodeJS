function hola(nombre) {
  // Start with promises....
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Hola ' + nombre);
      res(nombre);
    }, 2000);
  });
  console.log('Hola, soy una funccion asincrona.');
}

function hablar(nombre) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Bla bla bla bla...');
      //   res();
      rej('Hay un error!');
    }, 1000);
  });
}

function adios(nombre) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log('Adios ' + nombre);
      res(nombre);
    }, 1000);
  });
}
