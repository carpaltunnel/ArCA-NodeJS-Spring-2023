# Events and Callbacks
Event handlers and Callbacks are blocks of code that will be triggered by other logic at some time in the future.  They are the beginnings of asynchronous programming because they allow us to define code that will execute at an unknown time in the future or that may never execute at all.  While events are still commonly used, callbacks can generally be considered as deprecated in favor of Promises (lesson 13) and should be avoided if at all possible - you'll see why very soon.

## Callbacks
Similar to Events, Callbacks are blocks of code that will execute when "something" else happens.  Dissimilar to events, callbacks are functions that are passed to other functions to be invoked when the parent function completes.

An easy way to demonstrate this is with the *setTimeout(function, milliseconds)* function.  *setTimeout* will asynchronously wait the number of milliseconds specified as the second parameter, then invoke the function specified as the first parameter.  

For a simple example, let's write an inline anonymous function that writes "this is a test" to the console after 5 seconds (5,000ms) using *setTimeout()*.
```javascript
setTimeout(() => {
  console.log('this is a test');
}, 5000)
```

Simple enough, right?  But, what if you needed to do real work?  Let's say you need to accomplish the following and each step is an asynchronous call :
1. Fetch a username from a secret store
2. Fetch a password from a secret store
3. Use username/password to call an API to retrieve initial data
4. Post that data to a separate API and retrieve the results
5. Store the results in a database
6. Notify another service that the work is complete

Without implementing the actual logic, we'll use function names that represent each step where each expects a callback for the "next step" :
```javascript
fetchUsername(userService, (username) => {
  // check that we got a username returned
  // Is it valid? good, continue...
  fetchPassword(passwordService, username, (password) => {
    // check that we got a password returned
    // Is it valid? good, continue...
    callInitialAPI(url1, username, password, (initialResults) => {
      // check that the response is valid
      // check the return code
      // modify initialResults to match the expected format for postInitialData
      postInitialData(url2, initialResults, (secondaryResults) => {
        // check that the response is valid
        // check the return code
        // modify secondary results to match our database structure
        storeResultsInDb(secondaryResults, (dbResult) => {
          // check that db response was successful
          // format an appropriate message for notification of completion
          notifyOfCompletion(dbResults, (notifyResults) => {
            console.log('All done!');
          });
        });
      });
    });
  });
});
```
Welcome to <span style="font-size:larger;">**CALLBACK HELL**</span>!

Even worse, imagine if you had to do some type of logic in between each call before making the next asynchronous function call.  If this doesn't convince you that callbacks are a thing of the past and to be avoided, let me know and I'll put together a "real" exercise for you to implement.

## Events
An "event" is something happens, defined by the code or module that will be emitting the event.  We'll start by looking at handling events from common core modules then create our own EventEmitter.  An event handler is also called a "listener" because it listens for events, then executes handler code against the event that occurred.

### Event Listeners (Handlers)
Event handlers are most commonly defined by using the *.on('event-name', function)* function on a Object that implement or extends the EventEmitter class.  We've already talked about the *fs* core module, so let's use one of the functions that we haven't talked about to explore events.

The *fs.watch()* function of the File System core module extends the EventEmitter class, returns a fs.FSWatcher object, and emits a *change* event when the file being watched is modified.  To trigger custom logic based on this event you must attach a listener by using the *.on(event, handlerFunction)* function.

```javascript
const fs = require('fs');
const testFile = './test.txt';
// "watch" the testFile
const watcher = fs.watch(testFile);

// Add listener / event handler for the 'change' event - anonymous function style
let eventCounter = 0;
watcher.on('change', (event, filename) => {
  console.log(`Something happened to file : ${filename}.  The event was : ${event}.  This event #${++eventCounter}`);

  // Close the watcher after 10 events
  if (eventCounter > 10) {
    console.log('10 events have occurred, closing the watcher...\n');
    watcher.close();
  }
});
```

You'll notice that, unlike our previous scripts, this one does not exit immediately.  Node will keep a process alive so long as there are active listeners and emitters because they are waiting to emit or handle future events.  Once *watcher.close()* is invoked, all listeners are removed, the emitter is closed, and the process will exit because it has no more potential work to do.

The opposite of adding a listener with *.on()* is removing a listener with *.off(event, handlerFunction)*.  For this to function correctly, and for readability, you need to use named functions rather than anonymous functions.  You must specify the event you wish to remove a listener from as well as the exact same function that was added as a handler.

```javascript
const fs = require('fs');
const testFile = './test.txt';

// Define the 'change' handler function
const changeHandler = (event, filename) => {
  console.log(`Something happened to file : ${filename}.  The event was : ${event}.  This event #${++eventCounter}`);

  // Remove the change handler after 10 events
  if (eventCounter > 10) {
    console.log('10 events have occurred, removing the "change" event handler...\n');
    watcher.off('change', changeHandler);
    // Notice that the process doesn't end because the is still active.
  }
}

// "watch" the testFile
const watcher = fs.watch(testFile);

// Add listener / event handler for the 'change' event - named function style
let eventCounter = 0;
watcher.on('change', changeHandler);
```


While *.on()* will execute every time a defined event occurs, you can also use *.once()* to execute your handler code only one time.  After execution, the listener is automatically removed but the emitter remains.
```javascript
const fs = require('fs');
const testFile = './test.txt';

// Write data to file
fs.writeFileSync(testFile, fileWriteData);

// Define the 'change' handler function
const changeHandler = (event, filename) => {
  console.log(`Something happened to file : ${filename}.  The event was : ${event}.  This event #${++eventCounter}`);

  // Remove the change handler after 10 events (this will never happen because of .once())
  if (eventCounter > 10) {
    console.log('10 events have occurred, removing the "change" event handler...\n');
    watcher.off('change', changeHandler);
    // Notice that the process doesn't end because the close emitter is still active.
  }
}

// "watch" the testFile
const watcher = fs.watch(testFile);

// Add a "once" listener / event handler for the 'change' event - named function style
let eventCounter = 0;
watcher.once('change', changeHandler);
```

I recommend you review the [full documentation](https://nodejs.org/api/events.html) but a few other helpful functions are *.listenerCount(event)* for retrieving the number of listeners and *.listeners(event)* for returning a list of listeners for the specified event.

### Event Emitters
Event Emitters are the opposite of listeners.  Emitters are what generate the events that listeners consume and handle.

```javascript
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
```

### HTTP/S
A continuation on our core modules lesson.  Now that we know about callbacks and events, let's talk about HTTP/S.  
## HTTP/S
HTTP and HTTPS modules are very similar so we'll just cover the basics with HTTP.  Keep in mind that if you need to negotiate an SSL connection you will need HTTPS.  A common way to determine which module to use is to evaluate the URL you're going to call and check for 'http://' vs 'https://'.

Let's take a brief detour and look at the HTTP protocol.  I won't rehash it here since MDN does an excellent job of describing it in their [HTTP Protocol Guide](https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview) and [HTTP Request Methods Doc](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods).

Got it?  Good.  We'll use http://httpbin.org/#/HTTP_Methods for a test echo server - it may or may not be available at the time you're reading this.  This service will answer basic requests and echo submitted values back to you for testing.

Since we're covering core modules we'll use the core HTTP module here but there are third party libraries (like [Axios](https://github.com/axios/axios)) that can make things much easier on you.  These examples will also be using callbacks and events which we'll talk about more in the next lesson.  An asynchronous/promise approach is the modern way of doing the same thing.

A GET example :
```javascript
const http = require('http');
http.get('http://nodejs.org/dist/index.json', (res) => {
  if (res.statusCode !== 200) {
    console.log(`Error : Status code ws ${res.statusCode}`);
    res.resume();
    return;
  }
  
  res.setEncoding('utf8');
  let rawData = '';
  res.on('data', (chunk) => { rawData += chunk; });
  res.on('end', () => console.log(rawData));
});
```

A POST example : 
```javascript
const http = require('http');

const postData = JSON.stringify({
  'hi': 'Hi there httpbin!',
});

const options = {
  hostname: 'httpbin.org',
  port: 80,
  path: '/post',
  method: 'POST',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const req = http.request(options, (res) => {
  console.log(`Response Status Code : ${res.statusCode}`);
  console.log(`Response Headers : ${JSON.stringify(res.headers)}`);
  res.setEncoding('utf8');
  res.on('data', (chunk) => {
    console.log(`Response Body: ${chunk}`);
  });
  res.on('end', () => {
    console.log('No more data in response.');
  });
});

req.on('error', (e) => {
  console.error(`Error in request : ${e.message}`);
});

// Write data to request body
req.write(postData);
req.end();
```