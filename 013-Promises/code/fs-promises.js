const fs = require('fs/promises');

const testFile = './test.txt';

// Check if a file exists - async
const fileExistsPromise = async () => {
  let fileExists;

  try {
    fileExists = await fs.stat(testFile);
  } catch (ex) {
    return false;
  }

  // if it exists, delete it
  if (fileExists) {
    await fs.rm(testFile);
  }

  return true;
}

// Write file, async
const fileWritePromise = async () => {
  // Create data to write to the file : 0 to 9, each on a new line
  let fileWriteData = '';
  for (let x = 0; x < 10; x++) {
    fileWriteData += `\t${x}\n`
  }

  // Write data to file
  await fs.writeFile(testFile, fileWriteData);
};

// Read file, async
const fileReadPromise = async () => {
  return await fs.readFile(testFile, { encoding:'utf8', flag:'r' });
};

// Async main logic that lets us 'await' the promises
const runLogic = async () => {
  console.log(`Checking if file exists... ${await fileExistsPromise()}`);
  console.log(`Writing file...`);
  await fileWritePromise();
  console.log(`Reading file ...`);
  console.log(`\tfileContents (${testFile}) are : \n${await fileReadPromise()}`)
}

// Execute everything
runLogic();