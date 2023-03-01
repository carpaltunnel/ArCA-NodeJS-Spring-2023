const fiveSecondPromise = (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, seconds * 1000);
  });
};

fiveSecondPromise(5).then(() => {
  console.log('Looks like it\'s been five seconds...');
}).catch((err) => {
  console.error(`An error/reject occurred!  The error was : ${err}`);
}).finally(() => {
  console.log('Everything in the promise chain is done executing');
});

console.log('I wonder when the promise will resolve...');