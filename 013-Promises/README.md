# Asynchronous Programming ... Evolved
We covered callbacks and events, but what if there was a better way?  Enter "Promises".

## Promises
Promises are asynchronous functions that "promise" to notify you when their work is done and do not block the event loop.  The completion can be a success (resolve) or an error (reject).  Since full featured Promises are somewhat new to Node.js core (*Promise.allSettled()* was only added in v12, though basic functionality has been around longer), we'll briefly cover two third party libraries that filled the gap while the Node.js Promise core was under development.

The old style of Promises function in a sequential *doThis().then(doThat()).then(doSomethingElse()).catch(error)* format where *doThis()* executes and returns a promise, "then" *doThat()* executes and returns a promise, then *doSomethingElse()* executes and returns a promise (or value).  If an Exception or Promise rejection occurs anywhere in the chain, the *.catch()* is invoked.  This has become more convenient since *async/await* were added in Node.js v8 and we'll talk about that under "Native Promises".  You should strive to use native Promises since they require no external libraries.

### Q
[Q](https://github.com/kriskowal/q) is a Promise library that I've used for years.  It was very convenient for porting callback functions to promises.

```javascript
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
}).done((finalValue) => {
  console.log('Everything in the promise chain is done executing');
});
```

You can also execute an array of promises and wait until all are finished **OR until one rejects**.  This is important to know about *Q.all()* - when one promise rejects, the *all()* promise is immediately rejected without waiting for the rest of the batch.

```javascript
const Q = require('q');

const variableSecondPromise = (seconds) => {
  const deferred = Q.defer();
  setTimeout(deferred.resolve, seconds * 1000, seconds);
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

Q.all(promises).then((results) => {
  console.log('All promises have resolved.  Results are : ');
  results.forEach((res) => {
    console.log(JSON.stringify(res));
  });
}).catch((err) => {
  console.error(`An error/reject occurred!  The error was : ${err}`);
}).done(() => {
  console.log('Everything in the promise chain is done executing');
});
```

If you want to wait for every promise to complete, successfully or unsuccessfully, you'll want *Q.allSettled()*.  It also returns the results of every promise that you can check for a state of *fulfilled* (successful/resolved) or *rejected* (error/rejected).

```javascript
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
```

If terminating the promise chain on the first rejection is acceptable, but you need to separate the results of each promise, you can use *Q.spread()* instead of *.then()*.  I used the node *...spread* syntax in the example below to demonstrate that you don't need to list every promise return as a separate parameter but it is common to do so in order to utilize the resolved value for a specific purpose with an aptly named parameter.

```javascript
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
```



### Bluebird
I'm less familiar with [Bluebird](https://github.com/petkaantonov/bluebird), but the basic functionality is the generally same as Q.  Though, there are some additional convenience methods.  If you have a good understanding of Q and promises in general, you'll have no problem with Bluebird.

### Native Promises
Node.js now natively supports promises - no need for third party libraries!  For that reason, you'll want to use the native implementation whenever possible.  To be honest, Node.js has supported promises since v0.12 but were standardized in ES6.  Since many other convenient language constructs are more recent, you really didn't see much adoption until v8 or v10.  In the past, Q and Bluebird had much more robust functionality so they were used more than the native implementation.  There are still some things that Q/Bluebird offer that may be an argument for using them.  For example, Promise.any() was only recently added in Node.js v15.14 but it's been available in Q/Bluebird for years.

Just like Q and Bluebird, the native promise provides *.then()*, *.catch()*, *.all()* and *.allSettled()* functions... among others.  It also provides a *.finally()* function that is identical to *Q.done()* but matches standard try/catch syntax more closely.  Keep in mind that the extent of support depends on the version of Node.js you're using.  *Promise.allSettled()*, for example, was only added in v12.

The Promise API exposes a Promise constructor that can be initialized using *new Promise()*.  In this example, we use the same *setTimeout()* function to simulate an asynchronous operation using a native promise.  We can simply wrap existing logic with a *new Promise()* to "promisify" it and convert to using the provided *resolve* and *reject* parameters.

```javascript
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
```


We can do the same thing as *Q.all()* with *Promise.all()* :
```javascript
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
```

And we can do the same thing as Q with *Promise.allSettled()* :
```javascript
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

Promise.allSettled(promises).then((results) => {
  console.log('All promises have resolved.  Results are : ');
  results.forEach((res) => {
    console.log(JSON.stringify(res));
  });
}).catch((err) => {
  console.error(`An error/reject occurred!  The error was : ${err}`);
}).finally(() => {
  console.log('Everything in the promise chain is done executing');
});
```

Much easier to read than callbacks, yes?  But wait, there's more...

### async / await
Node.js has supported *async / await* since v8 (if we're only discussing LTS versions) and they provide a way to work with promises that is **MUCH** easier to read and write.  Instead of creating multiple chained scopes with *.then()* we can simply use the *await* keyword before promisified calls and the engine will suspend the code until the promise resolves or rejects.  One important note is that *await* can only be used in scopes declared with the *async* keyword.  Example below.

```javascript
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
```

Easier to read and write than chained promises and let's not even compare it to callback hell...

### try/catch/finally
We probably should have talked about *try/catch* earlier but handling promise rejections that occur during an *async/await* is a good time to circle back to it.  *try/catch* are standard Javascript language constructs for handling errors but they **do not** apply to promises **except** when using *async/await*.  With Q, Bluebird, and native promises we included a *.catch()* block but this is not the default Javascript catch.  Rather, it's a function in the library that imitates the behavior of the native *catch*.

*try/catch* are common in many languages and are a way handle runtime exceptions.  If an exception is thrown in a *try* block, execution will immediately jump to the *catch* block to allow the developer to decide what to do with it.

```javascript
try {
  console.log('I\'m about to throw an exception...');
  throw new Error('Told you so');
  console.log('I\'ll never execute due to the exception above : (');
} catch (ex) {
  console.error(`Error!  An exception was thrown with value : ${ex}`);
}
```

These exceptions don't have to be user generated like *throw new Error()* above.  They can be a basic language exception as well :
```javascript
try {
  console.log('I\'m about to throw an exception...');
  console.iDoNotExist('test');
  console.log('I\'ll never execute due to the exception above : (');
} catch (ex) {
  console.error(`Error!  An exception was thrown with value : ${ex}`);
}
```

If these same exceptions were to occur outside of a *try/catch* they would crash your code.  Catching them allows the developer to handle the exception cleanly and continue execution.

In addition to *try/catch* you can add a *finally* block.  The *finally* code block will execute after everything else in the *try/catch*, regardless of whether or not an exception occurred.  This is especially helpful for cleaning up resources like database connections or other lingering references.

```javascript
// Finally with exception
try {
  console.log('I\'m about to throw an exception...');
  console.iDoNotExist('test');
  console.log('I\'ll never execute due to the exception above : (');
} catch (ex) {
  console.error(`Error!  An exception was thrown with value : ${ex}`);
} finally {
  // Cleanup database connection or other resources
  console.log('O good, you\'re finally here...');
}

// Finally without exception
try {
  console.log('No exceptions here.');
} catch (ex) {
  console.error(`Error!  An exception was thrown with value : ${ex}`);
} finally {
  // Cleanup database connection or other resources
  console.log('O good, you\'re finally here...');
}
```

### Core Module Promises
Core modules provide a Promise API where applicable.  As an example, we'll look at *fs.promises*.

To utilize the FS Promise API, *require('fs/promises)* instead of *require('fs')*.  Then, treat it like any other promisified function :

```javascript
const fs = require('fs/promises');

const testFile = './test.txt';

// Check if a file exists - async
const fileExistsPromise = async () => {
  let fileExists;

  try {
    fileExists = await fs.stat(testFile);
  } catch (ex) {
    return false;
  }

  // if it exists, delete it
  if (fileExists) {
    await fs.rm(testFile);
  }

  return true;
}

// Write file, async
const fileWritePromise = async () => {
  // Create data to write to the file : 0 to 9, each on a new line
  let fileWriteData = '';
  for (let x = 0; x < 10; x++) {
    fileWriteData += `\t${x}\n`
  }

  // Write data to file
  await fs.writeFile(testFile, fileWriteData);
};

// Read file, async
const fileReadPromise = async () => {
  return await fs.readFile(testFile, { encoding:'utf8', flag:'r' });
};

// Async main logic that lets us 'await' the promises
const runLogic = async () => {
  console.log(`Checking if file exists... ${await fileExistsPromise()}`);
  console.log(`Writing file...`);
  await fileWritePromise();
  console.log(`Reading file ...`);
  console.log(`\tfileContents (${testFile}) are : \n${await fileReadPromise()}`)
}

// Execute everything
runLogic();
```

TODO : fs.promises : require('fs').promises or require('fs/promises').
TODO : Cover previous FS logic but promisified.
TODO : fs.promises : require('fs').promises or require('fs/promises').
TODO : Cover previous FS logic but promisified.
TODO : fs.promises : require('fs').promises or require('fs/promises').
TODO : Cover previous FS logic but promisified.
TODO : fs.promises : require('fs').promises or require('fs/promises').
TODO : Cover previous FS logic but promisified.