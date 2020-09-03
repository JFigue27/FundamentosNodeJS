const http = require('http');

http.createServer(router).listen(3000);

function router(req, res) {
  console.log('Nueva peticion');
  console.log(req.url);

  switch (req.url) {
    case '/hola':
      res.write('Hola, que tal... Estas en el servidor de jaime');
      res.end();
      break;

    default:
      res.write('Errot 404: No encontre lo que buscas..');
      res.end();
      break;
  }

//   res.writeHead(201, { 'Content-Type': 'text/plain' });

//   // Esta es la respuesta al usuario en el bowser...
//   res.write('Hi, I learn how to use http with nodeJS');

//   res.end();
}

console.log('Litering on http://localhost:3000');
