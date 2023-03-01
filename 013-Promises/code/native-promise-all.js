const variableSecondPromise = (seconds) => {
  return new Promise((resolve, reject) =>{
    setTimeout(resolve, seconds * 1000, seconds);
    if (seconds === 3) {
      setTimeout(reject, 2000, 'I don\'t feel like executing a 3 second promise');
    }
  })
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

Promise.all(promises).then((results) => {
  console.log('All promises have resolved.  Results are : ');
  results.forEach((res) => {
    console.log(JSON.stringify(res));
  });
}).catch((err) => {
  console.error(`An error/reject occurred!  The error was : ${err}`);
}).finally(() => {
  console.log('Everything in the promise chain is done executing');
});

console.log('I wonder when the promise will resolve...');