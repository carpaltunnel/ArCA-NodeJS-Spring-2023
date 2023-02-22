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
