const fs = require('fs');

// console.log(__dirname + '\\archivo.txt');

const read = (path, cb) => {
  fs.readFile(path, (err, data) => {
      console.log(path);
    //..
    cb(data.toString());
  });
}


const write = (path, data, cb) => {
    fs.writeFile(path, data, (err) =>{
        //..something
        if (err) {
            console.log('Somethig went wrong...');
        } else {
            console.log('The file was written successfully');
        }
    })
}

const deleteFile = (path, cb) => {
    fs.unlink(path, cb)

}

// write(__dirname + '\\archivo-2.txt', 'I am a new file...', console.log);
read(__dirname + '\\archivo.txt', console.log);
// deleteFile(__dirname + '\\archivo-2.txt', console.log);
