# JSON (JavaScript Object Notation)

## What?
JSON is a way to serialize Javascript objects into a human readable text/string format for safe and easy data transfer.  Javascript objects can be serialized to JSON and JSON can be deserialized into memory for programmatic use.

## Why?
You can't exactly safely transmit the memory contents of your script via a file or the internet and if you could it wouldn't be human readable.  JSON provides a safe format for writing objects in memory to a file or transmitting them across the internet.  Since it's mostly just a collection of formatted strings it is easy to read and safe to send over the internet.  The REST APIs we'll investigate and build will use JSON to transmit data back and forth from client to server.  Also, MongoDB documents are queried and stored (mostly) in JSON format so you'll be using it a lot.

## How?
JSON looks similar to Javascript declarations except no declaration (const/let) is required, all keys and values are strings, and they must be enclosed in double quotes with the exception of Numbers and Booleans.

Example :
```json
{
  "vehicle": {
    "make": "Tesla",
    "model": "S",
    "year": 2020,
    "salvaged": false,
    "authorizedDrivers": [
      "Person1",
      "Person2",
      "Person3"
    ]
  }
}
```


The *JSON* global object contains only two static functions that are used to serialize and deserialize data.  *JSON.stringify(obj)* will convert Javascript objects into JSON format.  *JSON.parse(string)* will convert JSON format into Javascript objects.

Example :
```javascript
const obj = {
  vehicle: {
    make: "Tesla",
    model: "S",
    year: 2020,
    salvaged: false,
    authorizedDrivers: [
      "Person1",
      "Person2",
      "Person3"
    ]
  }
};

const jsonString = JSON.stringify(obj);
const objAgain = JSON.parse(jsonString);
```