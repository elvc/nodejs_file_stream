const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const result = {};

// Dummy text file "dummy-text-file.txt"
const myReadStream = fs.createReadStream(
  __dirname + '/dummy-text-file.txt',
  'utf8',
);
let buff = fs.readFileSync(__dirname + '/dummy-text-file.txt');
// output the result in JSON format to "outputJSON.txt"
const myWriteStream = fs.createWriteStream(
  __dirname + '/output-file.txt',
  'utf8',
);

myReadStream.on('data', chunk => {
  myWriteStream.write(chunk);
});
