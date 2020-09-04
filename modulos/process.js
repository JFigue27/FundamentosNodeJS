// const process = require('process');

process.on('beforeExit', () => {console.log('El proceso esta por terminar..!');})


process.on('exit', () => {
  console.log('El proceso terminó!');
});
