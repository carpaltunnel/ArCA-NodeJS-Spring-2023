const variableSecondPromise = (seconds) => {
  return new Promise((resolve, reject) =>{
    setTimeout(resolve, seconds * 1000, seconds);
  });
};

const executePromisesWithAwait = async () => {
  const oneSec = await variableSecondPromise(1);
  console.log(`Result of one second promise was ${oneSec}`);

  const twoSec = await variableSecondPromise(2);
  console.log(`Result of two second promise was ${twoSec}`);

  const threeSec = await variableSecondPromise(3);
  console.log(`Result of three second promise was ${threeSec}`);

  const fourSec = await variableSecondPromise(4);
  console.log(`Result of four second promise was ${fourSec}`);
};

executePromisesWithAwait();
console.log('I wonder when the promise will resolve...');