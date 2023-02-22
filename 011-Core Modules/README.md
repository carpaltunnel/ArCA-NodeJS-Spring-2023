# Node.js Core Modules
We've only covered basic Javascript up to this point, let's jump into Node.js and look at the core modules that are provided with it.  The list of core modules included in Node.js v14 can be found in the [official documentation](https://nodejs.org/docs/latest-v14.x/api/all.html).  We'll start with a few of the most commonly used modules like [Filesystem](https://nodejs.org/docs/latest-v14.x/api/fs.html), [HTTP](https://nodejs.org/docs/latest-v14.x/api/http.html) / [HTTPS](https://nodejs.org/docs/latest-v14.x/api/https.html), [OS](https://nodejs.org/docs/latest-v14.x/api/os.html), [ZLib](https://nodejs.org/docs/latest-v14.x/api/zlib.html), [Process](https://nodejs.org/docs/latest-v14.x/api/process.html), and [Stream](https://nodejs.org/docs/latest-v14.x/api/stream.html).

First we need to learn how to include a module.  The most common way is the built in *require('module-name')* (CommonJS) function.  Support for ES6 *import* was added in Node.js v12.  There is no dramatic difference between the two and since you'll see *require()* more often, we'll stick to it.

To include a module in your script for use (assuming the module is available - we're talking about core modules so they will always be available), simply use *require('module-name')* and assign it to a *const* like *const Filesystem = require('fs');*

You'll see this repeatedly in the examples below.  As usual, we're only going to cover a small subset of the functionality in each module.  Refer to the [official documentation](https://nodejs.org/docs/latest-v14.x/api/all.html) for a full list.

We're also going to start by looking only at synchronous and callback based functions.  We'll expand into the more flexible asynchronous/promise based functions in the Asynchronous Programming lesson.  Synchronous functions include the word "synch" in their name for ease of identification.  In the real world, you probably always want to use the async versions as we'll see later.  But, the synchronous functions are a good introduction before we get to the complexity of asynchronous programming.
## FS
Below is a quick run through of common synchronous FS functions : 
```javascript
const fs = require('fs');

const testDir = './';
const testFile = './test.txt';
const testRename = './test-renamed.txt';

// Check if a file exists
const fileExists = fs.existsSync(testFile);

// if it exists, delete it
if (fileExists) {
  fs.rmSync(testFile);
}

// Create data to write to the file : 0 to 9, each on a new line
let fileWriteData = '';
for (let x = 0; x < 10; x++) {
  fileWriteData += `\t${x}\n`
}

// Write data to file
fs.writeFileSync(testFile, fileWriteData);

// Read file and output contents.
let fileContents = fs.readFileSync(testFile, { encoding:'utf8', flag:'r' });
console.log(`fileContents (${testFile}) are : \n${fileContents}`)


// List files in directory
console.log(`List of files in directory '${testDir}' is :`);
fs.readdirSync(testDir).forEach((file) => {
  console.log(`\t${file}`);
});

// Truncate the file so we can write new contents to it.
fs.truncateSync(testFile);

// Generate new file contents
fileWriteData = '';
for (let x = 10; x < 21; x++) {
  fileWriteData += `\t${x}\n`
}

// Write new data to file
fs.writeFileSync(testFile, fileWriteData);

// Read file and output contents.
fileContents = fs.readFileSync(testFile, { encoding:'utf8', flag:'r' });
console.log(`New fileContents (${testFile}) are : \n${fileContents}`)

// Retrieve file stats and print
const fileProperties = fs.statSync(testFile);
console.log(`File ${testFile} stats are :`);
console.log(fileProperties);

// Rename file
fs.renameSync(testFile, testRename);

// Read renamed file and output contents.
fileContents = fs.readFileSync(testRename, { encoding:'utf8', flag:'r' });
console.log(`Renamed fileContents (${testRename}) are : \n${fileContents}`)

// List files in directory
console.log(`List of files in directory '${testDir}' is :`);
fs.readdirSync(testDir).forEach((file) => {
  console.log(`\t${file}`);
});

fs.rmSync(testRename);
console.log(`Deleted file : ${testRename}`);

// List files in directory
console.log(`List of files in directory '${testDir}' is :`);
fs.readdirSync(testDir).forEach((file) => {
  console.log(`\t${file}`);
});
```

## Process
The process module is a global object and therefore does not require a ... well a require().

```javascript
// The process module is a global object and therefore does not require a ... require()
let startingDir = null;

startingDir = process.cwd();
console.log(`Current directory is : ${startingDir}`);

console.log('Changing directory to .. (one directory up)');
process.chdir('..');
console.log(`Current directory is now : ${process.cwd()}\n`);

console.log(`Changing back to our original directory (${startingDir}) ...`);
process.chdir(startingDir);
console.log(`Current directory is now : ${process.cwd()}\n`);

const envVars = process.env;
console.log(`There are ${Object.keys(envVars).length} environment variables set currently.`);
console.log(`The first one (natural ordering) is named ${Object.keys(envVars)[0]} and has value ${envVars[Object.keys(envVars)[0]]}\n`);

console.log('The full list of environment variables is :')
Object.keys(envVars).forEach((evar) => {
  console.log(`\t${evar} : ${envVars[evar]}`);
});

console.log(`\nThe current process ID is : ${process.pid}`);
console.log(`\nThe current platform is : ${process.platform}\n`);

// Create an exit event handler
process.on('exit', (code) => {
  console.log(`exit Event Handler : code is ${code}`);
});

console.log('Now we will explicitly cause the process to exit with return code 25 ...');

process.exit(25);
```

## OS
The *os* module does need a *require()*

```javascript
const os = require('os');

console.log('Here we present a list of helpful OS properties and functions :');
console.log(`\tArchitecture is : ${os.arch()}`);
console.log(`\tPlatform is : ${os.platform()}`);
console.log(`\tType is : ${os.type()}`);
console.log(`\tTotal memory is : ${os.totalmem()}`);
console.log(`\tFree memory is : ${os.freemem()}`);
console.log(`\tPercentage of memory used is : ${(os.totalmem() / os.freemem()).toFixed(2)}%`);
console.log(`\tThe current user's home directory is : ${os.homedir()}`);
console.log(`\tThe computer's hostname is : ${os.hostname()}`);
console.log(`\tList of CPU's with properties is : `);
console.log(os.cpus());
```

## ZLib
ZLib is a core module that provides compression and decompression functionality.  It only supports GZip, Deflate, and Brotli protocols.  So, while there is an *unzip()* function, this **does not** support the "zip" compression algorithm.  The *unzip()* function is a convenience method that inspects the header of the file and determines whether to use Gunzip or Inflate (the decompression modes of Gzip and Deflate).

Example of synchronous GZip / GUnzip :
```javascript
// Assume "fileWriteData" contains uncompressed data

// Compress (with GZip) data and write to testFile
const compressedData = zlib.gzipSync(fileWriteData);

// Write compressed data to file
fs.writeFileSync(testFileGz, compressedData);

// Read in compressed data
const compressedFile = fs.readFileSync(testFileGz);

// Gunzip compressed file data and write decompressed data to file
fs.writeFileSync(testFileDecomp, zlib.gunzipSync(compressedFile));

// Output decompressed data as string
console.log(zlib.gunzipSync(compressedFile).toString());
```

## Stream
Streams are extremely powerful and efficient.  Because of this, we'll dedicate an entire future lesson to them.

## HTTP/S
While extremely useful, there's no good way to talk about HTTP/S modules without talking about asynchronous programming.  So, we'll jump to our first steps of async next and discuss HTTP/S modules after that, along with third party alternatives to the core modules.