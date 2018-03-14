const fs = require('fs');
const stream = require('stream');
const readline = require('readline');
const fileName = process.argv[2];
const filePath = `./${fileName}`;

let currCount = 0;
let newCount = 0;
let time = 0;
fs.watchFile(filePath, function() {
  // lines counter
  const outstream = new stream();
  const myReadStream = fs.createReadStream(__dirname + `/${fileName}`, 'utf8');

  const rl = readline.createInterface(myReadStream, outstream);

  // calculate execution time
  const start = new Date();
  const hrstart = process.hrtime(); // high-res time
  const end = new Date() - start,
    hrend = process.hrtime(hrstart);

  rl
    .on('line', function(chunk) {
      // calculate time
      time += hrend[1] / 1000000;
      newCount++;
    })
    .on('close', function() {
      console.log('Last count:', currCount);
      console.log('File modified. New line count:', newCount);
      console.log('Difference:', newCount - currCount);
      console.log('time elapsed (ms)', time);
      console.log(
        'growth rate per ms:',
        (newCount - currCount) / time || 'N/A',
      );
      console.log('------------------------------');
      currCount = newCount;
      newCount = 0;
    });
});
