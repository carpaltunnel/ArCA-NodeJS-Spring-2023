# Loops (Iterations)
Loops let us execute one block of code many times, usually until certain conditions are met to terminate the loop.

## While
The most basic is a *while* loop.  A *while* loop evaluates a conditional and will then execute the code block if it evaluates as *true*.  Then, it will continue to execute the code so as long as the conditional remains *true*.

```javascript
let x = 0;

while (x < 10) {
  x++;
}
console.log(x); // 10

while (x < 5) {
  console.log('x < 5 is false, so this will not execute');
}
```

## Do While
The *do...while* loop will execute the provided code block until the conditional evaluates as *false*.  Because the conditional is evaluated **after** the code block, it will always execute at least once.

```javascript
let x = 0;
do {
  x++;
} while (x < 10) 
console.log(x); // 10

do {
  x++;
} while (x < 5);
console.log(x); // 11
```

## For
The *for* loop allows you to initialize a variable, evaluate it as the conditional for continuing the loop, and apply an operator to it all in one compact statement.  The three parts are enclosed in parentheses and separated by semicolons.  Continuing the example of counting to 10 :
```javascript
for (let x = 0; x < 10; x++) {
  console.log(x); // 9
}
```
*let x = 0* is evaluated first to initialize the variable.  Next, the conditional *x < 10* is evaluated.  If *true*, the loop body executes.  Once the body has completed, *x++* is executed which will increment *x*.  Then, the conditional is evaluated again to determine if the loop body should be executed another time.

## For In
**Warning** : Generally it's safer and all around a better idea to use *Object.keys().forEach()* to iterate properties of an object.  We cover *for...in* for completeness but you're not likely to use it very often.  We'll discuss that more in the *Objects* lesson.

The *for...in* loop iterates over all properties of an object **including inherited properties**.  The fact that it includes inherited properties is why you'll typically use *Object.keys().forEach()*.

Since we'll cover Objects (and keys) in the next lesson, here's very simple example just to demonstrate *for...in* syntax :
```javascript
// Assume Object named 'car'
for(const property in car) {
  console.log(property);
}
```
## For Of
*for...of* is new in ES6 so its use isn't super widespread but it allows us to loop over any Object that is iterable.  Therefore we can apply it to String, Arrays, iterable Objects, and others.  You'll probably see *.forEach()*  on arrays more often but *for...of* can be applied more broadly.

Again, since we'll be getting into Objects and Arrays later, here's a very simple example just to show the syntax :
```javascript
// Assume Array named 'cars'
for(const car of cars) {
  console.log(car);
}
```

## Break and Continue
### Break
The *break* keyword is used to exit or "break out of" a loop.  It will stop executing at the point of the *break* statement, skip any remaining code in the loop, and jump to the next line of code that is outside of the loop.

```javascript
const breakPoint = 7;
for (let i = 0; i < 10; i++) {
  
  if (i === breakPoint) {
    break;
  }

  console.log(i);
}
```

### Continue
The *continue* keyword instructs the interpreter to immediately jump to the next iteration of the loop.  Any code in the loop, after the *continue* keyword, will not execute during this iteration and the interpreter will continue execution on the next iteration of the loop.

```javascript
for (let i = 0; i < 10; i++) {
  
  if (i % 2 === 0) {
    continue;
  }

  console.log(i);
}
```




