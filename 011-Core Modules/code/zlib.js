const fs = require('fs');
const { Stream } = require('stream');
const { isMainThread } = require('worker_threads');
const zlib = require('zlib');

const testFile = './test.txt';
const testFileGz = './test.txt.gz';
const testFileDecomp = './test-decomp.txt';

// First, let's create a file and add some data into it.
// Check if a file exists
const fileExists = fs.existsSync(testFile);

// if it exists, delete it
if (fileExists) {
  fs.rmSync(testFile);
}

const fileExistsGz = fs.existsSync(testFileGz);
if (fileExistsGz) {
  fs.rmSync(testFileGz);
}

const fileExistsDecomp = fs.existsSync(testFileDecomp);
if (fileExistsDecomp) {
  fs.rmSync(testFileDecomp);
}


// Create data to write to the file
let fileWriteData = '';
for (let x = 0; x < 10000; x++) {
  fileWriteData += `\t${Math.random().toString().substr(0, 10)}\n`
}

// Write raw data to uncompressed file for comparison
fs.writeFileSync(testFile, fileWriteData);

// Compress (with GZip) data and write to testFile
const compressedData = zlib.gzipSync(fileWriteData);

// Write compressed data to file
fs.writeFileSync(testFileGz, compressedData);

// Read in compressed data
const compressedFile = fs.readFileSync(testFileGz);

// Gunzip compressed file data and write decompressed data to file
fs.writeFileSync(testFileDecomp, zlib.gunzipSync(compressedFile));