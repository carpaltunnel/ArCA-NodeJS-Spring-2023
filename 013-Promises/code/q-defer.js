const Q = require('q');

const fiveSecondPromise = (seconds) => {
  const deferred = Q.defer();
  setTimeout(deferred.resolve, seconds * 1000);
  return deferred.promise;
};

fiveSecondPromise(5).then(() => {
  console.log('Looks like it\'s been five seconds...');
}).catch((err) => {
  console.error(`An error/reject occurred!  The error was : ${err}`);
}).done(() => {
  console.log('Everything in the promise chain is done executing');
});

console.log('I wonder when the promise will resolve...');