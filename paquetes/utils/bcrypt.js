const bcrypt = require('bcrypt');

const password = 'Alf@0210';

bcrypt.hash(password, 5, (err, hash) => {
  //
  console.log(hash);

  // Esta funcion decodifica el has para comprobar su valor.
  bcrypt.compare(password, hash, (err, res) => {
    console.log(res);
  });
});
