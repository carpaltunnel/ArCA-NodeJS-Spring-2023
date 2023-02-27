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

// "watch" the testFile
const watcher = fs.watch(testFile);

// Add listener / event handler for the 'change' event - anonymous function style
let eventCounter = 0;
watcher.on('change', (event, filename) => {
  console.log(`Something happened to file : ${filename}.  The event was : ${event}.  This event #${++eventCounter}`);

  // Close the watcher after 10 events
  if (eventCounter > 10) {
    console.log('10 events have occurred, closing the watcher...\n');
    watcher.close();
  }
});

// Add listener for the 'close' event - anonymous function style
watcher.on('close', (event) => {
  console.log('Watcher has closed.  No longer listening for watcher events.');
});

// Notice that the script doesn't exit one all code has been read.  That's because the Node process will continue to live so long as emitters and listeners are active
// When the listener is removed, and the emitter closed with "watcher.close()", no more listeners/emitters are alive and the script will exit