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