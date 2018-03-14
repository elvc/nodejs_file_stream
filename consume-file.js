const fs = require('fs');
const readline = require('readline');
const stream = require('stream');

const result = {};

// Dummy text file "dummy-text-file.txt"
const myReadStream = fs.createReadStream(
  __dirname + '/dummy-text-file.txt',
  'utf8',
);
const buff = fs.readFileSync(__dirname + '/dummy-text-file.txt');
// output the result in JSON format to "outputJSON.txt"
const myWriteStream = fs.createWriteStream(
  __dirname + '/output-json.txt',
  'utf8',
);

// calculate execution time
const start = new Date();
const hrstart = process.hrtime(); // high-res time
const end = new Date() - start,
  hrend = process.hrtime(hrstart);

// lines counter
let count = 0;
const outstream = new stream();
const rl = readline.createInterface(myReadStream, outstream);

rl
  .on('line', function(chunk) {
    count++;
  })
  .on('close', function() {
    result.count = count;
    result.timeElapsedMS = hrend[1] / 1000000;
    result.bufferSize = Buffer.byteLength(buff, 'utf8');
    result.throughput =
      Buffer.byteLength(buff) / (hrend[1] / 1000000 * 1000000);
    myWriteStream.write(JSON.stringify(result));
    myWriteStream.end();
  });
