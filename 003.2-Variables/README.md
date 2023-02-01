# Variables Quirks
In this short lesson we'll be covering unexpected behavior and quirks of Javascript variables.

## Const... and when it's not.
Const is for declaring a "constant" right?  Well...
```javascript
const myObject = {
  myString: 'test string',
  myNumber: 42,
};
const myArray = [];

myObject.myBoolean = true;
myArray.push(1);
myArray.push(2);
myArray.push(3);
```
Not so constant is it?  The important part is that const's can **not** be reassigned.  The logic above is perfectly acceptable and normal.  The logic below would generate an exception.
```javascript
const myObject = {
  myString: 'test string',
  myNumber: 42,
};

myObject = 1; // Uncaught TypeError: invalid assignment to const 'myObject'
```

## Var Hoisting
Var hoisting is an old behavior of Javascript and one of the best arguments against ever using the "var" keyword.  Var declarations are "hoisted" to the top of their scope.  In the example below we appear to be declaring *myTest* on line #4 but the var is automatically moved (hoisted) to the beginning of the code block at run time so there is no error when used on line #1 and #2, before we explicitly declare it.  This is a simple example where it appears that *myTest* is used before it is ever declared but you can accomplish some truly horrifying bugs in more complicated situations.  

```javascript
myTest = 'a test';
console.log('The value of undeclared variable myTest is ' + myTest);

var myTest = 'declared here';
```

Don't use "var"... ever.


## Null versus Undefined
*Null* is "empty" or non-existent and must be assigned.  *Undefined* means that a variable has been declared but has never been assigned and is therefore not defined.
```javascript
const iAmNull = null;
let iAmUndefined;
console.log(iAmNull); // null
console.log(iAmUndefined); // undefined
```
Note that const declarations require initialization.  Using *const* before *iAmUndefined* would result in a Syntax Error.