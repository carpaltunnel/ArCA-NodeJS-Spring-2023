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

  // Remove the change handler after 10 events
  if (eventCounter > 10) {
    console.log('10 events have occurred, removing the "change" event handler...\n');
    watcher.off('change', changeHandler);
    // Notice that the process doesn't end because the close listener and emitter is still active.
  }
}

// Define the 'close' handler function
const closeHandler = () => {
  console.log('Watcher has closed.  No longer listening for watcher events.');
};

// "watch" the testFile
const watcher = fs.watch(testFile);

// Add listener / event handler for the 'change' event - named function style
let eventCounter = 0;
watcher.on('change', changeHandler);

// Add listener for the 'close' event - named function style
watcher.on('close', closeHandler);

// Notice that the script doesn't exit once all code has been read.  That's because the Node process will continue to live so long as listeners/emitters are active
// When we remove the changeHandler with watcher.off(), the closeHandler listener for the 'close' event is still active