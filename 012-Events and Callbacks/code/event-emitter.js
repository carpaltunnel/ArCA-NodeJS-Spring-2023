const EventEmitter = require('events');

// Create a new EventEmitter
const emitter = new EventEmitter();

// Add a listener for the '5-second-tick' event
emitter.on('5-second-tick', (event) => {
  console.log(`5-second-tick event triggered with value : ${event}`);
});

let emitCount = 0;
// emit an event every 5 seconds
setInterval(() => {
  emitter.emit('5-second-tick', ++emitCount);
}, 5000);