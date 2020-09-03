const { exec, spawn } = require('child_process');

// exec('node consola.js', (err, stdout, sterr) => {
//   if (err) {
//     console.log(err);
//     return false;
//   }

//   console.log(stdout);
// });

let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

proceso.stdout.on('data', (datos) => {
  console.log('Esta muerto...?');
  console.log(proceso.killed);
  console.log(datos.toString());
});
proceso.on('exit', () => {
  console.log('El proceso termino');
  console.log(proceso.killed);
});
