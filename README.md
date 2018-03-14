# File Streams in Node

## Duplex stream

* Consume line separated text and outputs objects including elapsed time, total length in bytes and total lines

```
node consume-file.js
// this will read "dummy-text-file.txt" and output to "output-json.txt"
```

## Human readable report

* Create human readable summary with throughput rate bytes/sec

```
node read-report.js
// this will output report to "human-readable-report.txt"
```

## Report number of lines and growth rate of a file

```
cd tail
node tail.js <filename>
```

* for example: `node tail.js output-file.txt` will monitor the changes of number of lines written/deleted and the growth rate
* Output will look something like this:

```
Last count: 0
File modified. New line count: 1090
Difference: 1090
time elapsed (ms) 44.10576000000005
growth rate per ms: 24.71332542506917
```
