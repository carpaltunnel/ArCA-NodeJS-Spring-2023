const fs = require('fs');

const testFile = './test.txt';

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

// Define the 'change' handler function
const changeHandler = (event, filename) => {
  console.log(`Something happened to file : ${filename}.  The event was : ${event}.  This event #${++eventCounter}`);

  // Remove the change handler after 10 events (this will never happen because of .once())
  if (eventCounter > 10) {
    console.log('10 events have occurred, removing the "change" event handler...\n');
    watcher.off('change', changeHandler);
    // Notice that the process doesn't end because the emitter is still active.
  }
}

// "watch" the testFile
const watcher = fs.watch(testFile);

// Add a "once" listener / event handler for the 'change' event - named function style
let eventCounter = 0;
watcher.once('change', changeHandler);

// a *.once() listener will only ever trigger once, no matter how many times the event is emitted. 
// It is automatically removed after being invoked once.
//  However, the emitter is still alive so the process does not exit even though no listeners are present.