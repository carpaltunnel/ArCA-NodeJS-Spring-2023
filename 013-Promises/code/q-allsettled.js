const Q = require('q');

const variableSecondPromise = (seconds) => {
  const deferred = Q.defer();
  setTimeout(deferred.resolve, seconds * 1000);
  if (seconds === 3) {
    setTimeout(deferred.reject, 2000, 'I don\'t feel like executing a 3 second promise');
  }
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

Q.allSettled(promises).then((results) => {
  console.log('All promises have resolved.  Results are : ');
  results.forEach((res) => {
    console.log(JSON.stringify(res));
  });
}).catch((err) => {
  console.error(`An error/reject occurred!  The error was : ${err}`);
}).done(() => {
  console.log('Everything in the promise chain is done executing');
});

console.log('I wonder when the promises will resolve...');