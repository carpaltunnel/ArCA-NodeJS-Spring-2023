# Arrays
Arrays allow us to create list-like objects of variables of any type.  One very important thing to note is that one array can contain multiple different types.  While generally a bad practice, it is possible to have a single array that contains strings, numbers, objects, and even other arrays. 

Arrays are declared similarly to other but members are wrapped in square brackets and assigned comma delimited if created at the time of declaration.

```javascript
const fruit = [
    'apple',
    'orange',
    'kiwi',
];

const numbers = [
   0,
   1,
   2,
];
```

Array members can be directly accessed and changed by their index number.  Keep in mind that Arrays are zero indexed.

```javascript
const fruit = [
    'apple',
    'orange',
    'kiwi',
];

fruit[0]; // apple
fruit[2]; // kiwi

fruit[2] = 'cantaloupe';
fruit[2]; // cantaloupe
```

The most important static method to know for now is <code>Array.isArray(obj)</code>.  This allows you test an unknown or uncertain variable to determine if it is an array.

The *.length* property of an array returns the number of items in the array.

## Modifying Arrays
The most common methods for adding and removing items from an array are *push(), pop(), shift(), and unshift()*

1. arr.push(val) - Add (push) val to end of the arr and return new length.
2. arr.pop() - Remove (pop) and return the last element of arr.
3. arr.unshift(val) - Add (unshift) val to the beginning of arr and return new length.
4. arr.shift() - Remove (shift) and return the first element of arr.
5. arr.splice(idx, deleteCount, newItem) - Add or delete items of arr *in place*.  This modifies the existing Array.

## Array Iteration
Simple Array iteration can be done with *.forEach()*, *for...in*, or *for...of*.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
];

fruits.forEach((fruit) => {
    console.log(`Fruit value is : ${fruit}`);
});

for (const idx in fruits) {
    console.log(`Fruit value is : ${fruits[idx]}`);
}

for (const fruit of fruits) {
    console.log(`Fruit value is : ${fruit}`);
}
```

## Create new Array from existing
*.filter()* applies a conditional to each item in the array and returns a new array containing all of the items that evaluated as *true*.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
    'apricot',
];

const fruitsThatStartWithA = fruits.filter(function (fruit) {
    if (fruit.slice(0, 1) === 'a') {
        return true;
    }
});

// Arrow function style :
const fruitsThatStartWithA2 = fruits.filter(fruit => (fruit.slice(0, 1) === 'a'));
```

*.concat(arr2)* merges two or more Arrays and returns a new Array.
```javascript
const fruits1 = [
    'apple',
    'orange',
];

const fruits2 = [
    'kiwi',
];

const fruits3 = [ 'apricot' ];

const mergedFruits = fruits1.concat(fruits2, fruits3);
```

*.map()* applies a user defined operation to each item in the Array and returns a new Array.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
    'apricot',
];

const upperCasedFruits = fruits.map(fruit => (fruit.toUpperCase()));
```

*.join()* returns a String rather than an Array.  It concatenates all values in the Array separated by the specified value.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
    'apricot',
];

const fruitCSV = fruits.join(', ');
```

## Evaluating Array Contents
*.includes()* returns *true* if one item in the Array is an exact match to the supplied value.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
];

const includesKiwi = fruits.includes('kiwi');
```

*.some()* returns *true* if at least one item in the Array meets the supplied conditional.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
];

const someContainA = fruits.some(fruit => (fruit.indexOf('a') > -1));
```

*.every()* returns *true* only if every item in the Array meets the supplied conditional.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
];

const allContainA = fruits.every(fruit => (fruit.indexOf('a') > -1));
```


## Searching Arrays
*.indexOf()* and *.lastIndexOf()* function the same as they do with Strings.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
    'apple',
];

const appleFirstIndex = fruits.indexOf('apple'); // 0
const appleLastIndex = fruits.lastIndexOf('apple'); // 3
```

*.find()* returns the value of the first element that meets the provided conditional.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
    'apricot',
];

const aFruit = fruits.find(fruit => (fruit.indexOf('a') > -1));
```

*.findIndex()* returns the index of the first element that meets the provided conditional.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
    'apricot',
];

const aFruitIndex = fruits.findIndex(fruit => (fruit.indexOf('a') > -1));
```

## Sorting Arrays
*.sort()* will **in place** sort an Array.  The default is a sort by String with implicit type conversion but a compare function can be supplied.
```javascript
const fruits = [
    'apple',
    'orange',
    'kiwi',
    'apricot',
];

fruits.sort(); // alpha sort
fruits.sort((a, b) => a.length > b.length); // length sort
```

## Array Destructuring
Arrays can be "destructured" for assignment and the *...* rest operator can be used for leftovers.
```javascript
const fruits = [
    'apple', 
    'orange', 
    'kiwi', 
    'apricot'
];

const [fruit1, fruit2, ...others] = fruits;
```