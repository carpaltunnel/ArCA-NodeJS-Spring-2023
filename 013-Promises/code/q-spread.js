const Q = require('q');

const variableSecondPromise = (seconds) => {
  const deferred = Q.defer();
  setTimeout(deferred.resolve, seconds * 1000, seconds);
  return deferred.promise;
};

const promises = [];
// 1 second promise
promises.push(variableSecondPromise(1));
// 2 second promise
promises.push(variableSecondPromise(2));
// 3 second promise
promises.push(variableSecondPromise(3));
// 4 second promise
promises.push(variableSecondPromise(4));

Q.spread(promises, (...results) => {
    console.log('All promises have resolved.  Results are : ');
    results.forEach((res) => {
      console.log(JSON.stringify(res));
    });
  }).catch((err) => {
    console.error(`An error/reject occurred!  The error was : ${err}`);
  }).done(() => {
    console.log('Everything in the promise chain is done executing');
  });

console.log('Execution continues...');