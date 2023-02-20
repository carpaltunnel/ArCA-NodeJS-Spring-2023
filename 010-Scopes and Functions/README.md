# Scopes / Closures
Scopes are typically defined by the { curly braces } that enclose them.  Variables declared in a scope are local to that area and are inherited by any sub scopes.  Variables declared locally in a scope are not accessible outside of that scope.  Commonly defined scopes are seen in conditionals, loops, and functions.

```javascript
const globalScope = 'global';
if (true) {
  const localScope = 'local';
  console.log(`globalScope is ${globalScope} and localScope is ${localScope}`);
}

console.log(`globalScope is ${globalScope} and localScope is ${localScope}`); // localScope is undefined
```

Because variables are managed according to their scope, you can have the same variable name declared in multiple scopes.  Though named the same, they represent different variables.
```javascript
const ambiguousScope = 'global';
if (true) {
  const ambiguousScope = 'local';
  console.log(`ambiguousScope is ${ambiguousScope}`);

  do {
    const ambiguousScope = 'for loop';
    console.log(`ambiguousScope is ${ambiguousScope}`);
  } while (false);
}

console.log(`ambiguousScope is ${ambiguousScope}`);
```
Generally it's a good idea to avoid reusing the same variable name in nested scopes to avoid confusion.

# Functions
Functions are reusable blocks of code that help simplify/compartmentalize logic and allow it to be invoked multiple times without duplicating same code.  Functions can be named or anonymous and can be assigned to variables for reuse or parameter passing.  They always return a value, typically specified by the *return* keyword.  If no *return* is explicitly coded, functions will return *undefined* by default.  Variables enclosed in the parentheses of the function definition are parameters that can be passed into the function.

```javascript
function addTwoNumbers(x, y) {
  return x + y;
}

addTwoNumbers(3, 4); // 7
```

## Anonymous Functions
Anonymous functions are functions with no name.
```javascript
const horseName = function() { 
  return 'with no name'; 
}

console.log(`A horse ${horseName()}`);
```

They can also be declared in ES6 Arrow format :
```javascript
const subtractTwoNumbers = (x, y) => {
  return x - y;
}

subtractTwoNumbers(3, 4); // -1
```

## Rest Parameters
The last parameter of a function definition can be a *rest* parameter, indicated by prefixing it with "*...*"

When a rest parameter is used an indefinite number of extra parameters will be added to the array named by the rest parameter.

```javascript
function printParameters(firstParam, ...otherParams) {
  console.log(`The first parameter was ${firstParam}.  The other parameters are :`);
  for(const param of otherParams) {
    console.log(`\t${param}`);
  }
}

printParameters(1, 2, 3, 'four', 'five', 6, 'seven');
```

## Spread Syntax
Spread syntax is similar to destructuring in that it will break an iterable Object into individual pieces.  This can be used to pass properties of an Array to a function, among other things.  We can combine spread syntax with the rest parameter example above :
```javascript
function printParameters(firstParam, ...otherParams) {
  console.log(`The first parameter was ${firstParam}.  The other parameters are :`);
  for(const param of otherParams) {
    console.log(`\t${param}`);
  }
}

const variableParams = [2, 3, 'four', 'five', 6, 'seven'];
printParameters(1, ...variableParams);
```

## Parameter Defaults
You can define default values for parameters that will be used if no parameter is specified by the caller.  Note that *null* is considered a specified value and overrides the default but *undefined* is not.
```javascript
function printParameters(firstParam = 'first', secondParam = 'second') {
    console.log(`The first parameter was ${firstParam}.  The second param is ${secondParam}`);
}

printParameters(); // The first parameter was first.  The second param is second
printParameters('test1'); // The first parameter was test1.  The second param is second
printParameters('test1', 2); // The first parameter was test1.  The second param is 2
printParameters(null, 2); // The first parameter was null.  The second param is 2
printParameters(undefined, 2); // The first parameter was first.  The second param is 2</code></pre>
```