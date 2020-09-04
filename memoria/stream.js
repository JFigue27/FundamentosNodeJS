const fs = require('fs');
const stream = require('stream');

let data = '';
let readableStream = fs.createReadStream(__dirname + '//input.txt');

readableStream.setEncoding('utf-8');

readableStream.on('data', (chunk) => {
  //   console.log(chunk);
  data += chunk;
});

readableStream.on('end', () => {
  console.log(data);
});

process.stdout.write('hola');
process.stdout.write('que');
process.stdout.write('Talssss');

