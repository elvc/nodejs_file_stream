# File Streams in Node

## Duplex stream

* Consume line separated text and outputs objects including elapsed time, total length in bytes and total lines

```
// this will read "dummy-text-file.txt" and output to "output-json.txt"
node consume-file.js
```

## Human readable report

* Create human readable summary with throughput rate bytes/sec

```
// this will output report to "human-readable-report.txt"
node read-report.js
```

## Report number of lines and growth rate of a file

```
cd tail
node tail.js <filename>
```

* For example: `node tail.js output-file.txt` will monitor the changes of number of lines written/deleted and the growth rate
* You can try modifying the file and save. The report will be automatically generated.
* Output will look something like this:

```
Last count: 0
File modified. New line count: 1090
Difference: 1090
time elapsed (ms) 44.10576000000005
growth rate per ms: 24.71332542506917
```
