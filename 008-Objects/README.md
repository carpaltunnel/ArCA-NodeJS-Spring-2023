# Objects
## Objects
Objects can be thought of as containers that hold other variables.  Those other variables can also be objects (which in turn can have object members), resulting in a nested structure.  Objects can contain any standard type - strings, numbers, objects, arrays, functions, etc.

Objects can be created and changed in multiple ways.  Simple access of object members is done with dot notation.  The name of the members are called *keys* because they are key-value pairs.
```javascript
// Declare and initialize "myObject"
const myObject = {
  myString: 'test string',
  myNumber: 42,
};

// Access and print the value of myString and myNumber
console.log(`myString = ${myObject.myString} and myNumber = ${myObject.myNumber}`);

// Create new boolean member on myObject named "newBoolean" and assign Boolean "true"
myObject.newBoolean = true; // Dot notation

console.log(JSON.stringify(myObject));
```

Object members can also be created and accessed with bracket notation.  The example below has the exact same effect as the one above, but using brackets.
```javascript
// Declare and initialize "myObject"
const myObject = {
  myString: 'test string',
  myNumber: 42,
};

// Access and print the value of myString and myNumber
console.log(`myString = ${myObject['myString']} and myNumber = ${myObject['myNumber']}`);

// Create new boolean member on myObject named "newBoolean" and assign Boolean "true"
myObject['newBoolean'] = true;

console.log(JSON.stringify(myObject));
```

Dot notation is more common and generally easier to both read and code.  However, bracket notation can be extremely flexible when combined with string templating which allows you to effectively create variable variable names.  A somewhat contrived example that accomplishes exactly the same as both examples above is : 
```javascript
// Declare and initialize "myObject"
const myObject = {
  myString: 'test string',
  myNumber: 42,
};

// Access and print the value of myString and myNumber
console.log(`myString = ${myObject[`${'my' + 'String'}`]} and myNumber = ${myObject[`${'m' + 'yNum' + 'ber'}`]}`);

// Create new boolean member on myObject named "newBoolean" and assign Boolean "true"
const newBooleanVarName = 'newBoolean';
myObject[newBooleanVarName`] = true;

console.log(JSON.stringify(myObject));
```

Properties can be removed from an Object using the `delete` keyword.  Extending the example above :
```javascript
delete myObject.myString; 
// myObject now only contains "myNumber" and "newBoolean".
```


### Common Static Methods
1. Object.assign(obj1, obj2, ...) - Shallow copy / merge object properties
2. Object.keys(obj) - Return an array of obj1 property names (keys)
3. Object.values(obj) - Return an array of obj1 values
4. Object.entries(obj) -  Return an array of arrays containing obj1 key and value

**NOTE** : Object.assign() does what is called a "shallow copy."  Primitives will be copied to new variables but references to Objects (and Arrays) and functions will copy the reference.  Therefore if the original Object/Array is modified it will also change the new "copy".  This is a very common cause of beginner errors.  Example below : 
```javascript
const person = {
  name: 'Patty',
  age: 30,
  hobbies: {
    music: true,
    singing: true,
  },
}

const personClone = Object.assign({}, person);
person.hobbies.hurdyGurdy = true;

console.log(person.hobbies); // { music: true, singing: true, hurdyGurdy: true }
```
If you need to "deep clone" an Object to sever all references to the original you'll need to write a clone function or use a module.

Iterating properties of an object :
```javascript
const truck = {
    make: 'Toyota',
    model: 'Tundra',
    year: 2010,
};

Object.keys(truck).forEach(function (key) { // old style
    console.log(`Key: ${key}, Value: ${truck[key]}`);
});

Object.keys(truck).forEach((key) => { // new style / arrow function
    console.log(`Key: ${key}, Value: ${truck[key]}`);
});

for (const key in truck) {
    console.log(`Key: ${key}, Value: ${truck[key]}`);
}

```

### Object Destructuring
Objects can be "destructured" into their components with automatic property name matching.
```javascript
const truck = {
    make: 'Toyota',
    model: 'Tundra',
    year: 2010,
};

const { make, model, year } = truck;
```