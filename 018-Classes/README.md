# Classes
Classes let us declare a logical "thing" and encapsulate its properties and logic.  Classes are just a special type of functions that we can use like classes in other languages.  Similar to how we've created Objects to represent vehicles, we can do this an even cleaner way with classes.  As a general best practice, classes begin with an upper case letter.

Classes can have both instance and static properties.  Instance properties are bound to the `this` context and require an instance of the class to be referenced.  Static properties are bound to the class itself and must be accessed via the class prototype alone - they can not be used on a class instance.

## Constructors
The constructor is a special method that is invoked automatically when a class is instantiated.  It is mostly used to initialize the class instance with values, set defaults, do pre-work, etc.

A generic vehicle class with a constructor would look something like this : 
```javascript
class Vehicle {
  constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
}

// Create instance of Vehicle and invoke constructor
const myVehicle = new Vehicle('Tesla', 'S', 2020)
```

## Static vs Instance Properties
As we've seen in the past, instance properties are properties that are bound to one specific instance of an object.  The same is true for classes.  If a class is referring to properties of a particular instance, it will probably be referring to the `this` context and will only be accessible when an instance is declared.

On the other hand, if a class function or property doesn't need specific properties of an instance, it can be declared as `static`.  Take note that arrow functions are inherently bound to `this` so it would be better to use non-arrow syntax in this scenario.

```javascript
'use strict';

class Vehicle {
  constructor (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  myMake() {
    console.log(`My make is : ${this.make}`);
  }

  myModel = () => {
    console.log(`My model is : ${this.model}`);
  }

  static iAmA() {
    console.log('I am a vehicle');
  }
}

// Create instance of Vehicle and invoke constructor
const myVehicle = new Vehicle('Tesla', 'S', 2020);
myVehicle.myMake();
myVehicle.myModel();
Vehicle.iAmA();
```



## Inheritance
You can create a class hierarchy by extending another class.  It's handy to think of this a super classes and sub classes, where the sub class is a specific type of the super class.  Continuing our "vehicle" example, let's create a "Truck" class that extends the "Vehicle" class and adds some properties that are specific to trucks.  We'll also see the `super()` keyword that will invoke the constructor of the super class.

```javascript
class Truck extends Vehicle {
  constructor(make, model, year, bedLength, towCapacity) {
    super(make, model, year);
    this.bedLength = bedLength;
    this.towCapacity = towCapacity;
  }

  static iAmA() {
    console.log('I am a truck');
  }
}

// Create instance of Truck and invoke constructor
const myTruck = new Vehicle('Toyota', 'Tacoma', 2010, 6, 1500);
myTruck.myMake();
myTruck.myModel();
Truck.iAmA();
```

In addition to being common to use `super` to invoke the super class constructor, you can also use it to invoke super class methods with `super.functionToInvoke()`.


## use strict
The `'use strict';` statement at the top of a script indicates that it should be executed in "strict" mode.  Strict mode enables a more particular mode that converts what might be a previously allowable developer mistake into an error.  You should always use strict mode since there's no real reason not to and it can avoid developer mistakes that could lead to unintended consequences.
