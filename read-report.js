const fs = require('fs');

const fileInputPath = '/output-json.txt';
const fileOutputPath = '/human-readable-report.txt';

// Read the file from "output-json.txt", which was created after node consume.js was run
const myReadStream = fs.createReadStream(__dirname + fileInputPath, 'utf8');

// Takes the JSON and output one-line summary reports (human readable reports)
const myWriteStream = fs.createWriteStream(__dirname + fileOutputPath, 'utf8');

myReadStream.on('data', chunk => {
  const result = JSON.parse(chunk);

  myWriteStream.write(
    `Reading file: ${fileInputPath}. There are ${
      result.count
    } line. Time elapsed to read file is ${
      result.timeElapsedMS
    }ms. Buffer size is ${result.bufferSize} bytes. Throughput rate is ${
      result.throughput
    } bytes per second.`,
  );
});

myReadStream.on('close', () => {
  console.log(
    `File read of ${fileInputPath} ended. Report generated to: ${fileOutputPath}`,
  );
});
