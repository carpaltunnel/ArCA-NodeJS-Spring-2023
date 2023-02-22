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
