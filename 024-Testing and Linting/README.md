# Testing and Linting
ESLint, Assert, Mocha, Chai, and Sinon are testing frameworks and tools that allow to prove your code works by exhaustively testing it.  They help facilitate Test Driven Development (TDD) and Behavior Driven Development (BDD) by creating test cases that your code must satisfy, then demonstrating that it does.

## ESlint
ESLint detects and recommends fixes to common mistakes and style errors.  These range from things that are deprecated like `var` usage and simple code style recommendations like suggesting that every file should end with a new line.  AirBnB publishes a commonly used ESLint definition that we'll be using.

1.  Install ESLint : `npm install --save-dev eslint`
2.  Install the AirBnB base config : `npx install-peerdeps --dev eslint-config-airbnb-base`
3.  Initialize ESLint to create your local config file : `./node_modules/.bin/eslint --init`

The `--init` should ask you if you want to use a published style guide under which you can choose the AirBnB one.  It should add `"extends": "airbnb-base"` to your .eslintrc 

When using VS Code, I'd recommend you install the [ESLint Extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) so you get real time linting in your IDE.

## [Assert](https://nodejs.org/docs/latest-v14.x/api/assert.html)
[Assert](https://nodejs.org/docs/latest-v14.x/api/assert.html) is a Node.js core module that provides assertion functions for verifying expressions.  When a test returns false, asserts throws an error to stop execution which can bubble up to Mocha, Chai, etc.  Because it is a core module, no dependency is required but you do need to `require()` it in your script.

Use "strict" assertions by importing the Strict module with `const assert = require('assert').strict;` - Legacy mode should be avoided.

The primary functions you're likely to use are : 
1. assert(expr) - Evaluate expr for truthy value
2. assert.equal(x, y) - Assert that x === y
3. assert.notEqual(x, y) - Assert that x !== y
4. assert.deepEqual(q, z) - Assert that q deep equals z
5. assert.notDeepEqual(q, z) - Assert that q does not deep equal z

## Mocha
Mocha is a robust testing framework that we can use to write comprehensive yet readable test suites for our code.  Tests are typically grouped by file, class, and function with both positive and negative tests.  When executed, the tests will provide a list of correct and incorrect results that are easy to read and understand.  It is commonly paired with `assert` and / or `chai` for determining the results of tests.

A common structure looks like : 
1. Describe "MyClass1"
   1. Describe "function1" (of MyClass1)
      1. it (function1) should do <this> when <that> is supplied
      2. it (function1) should do <that> when <this> is supplied
      3. it (function1) should not do <weirdness> when <that> is supplied
   2. Describe "function2" (of MyClass)
      1. it (function2) should do <this> when <that> is supplied
      2. it (function2) should do <that> when <this> is supplied
      3. it (function2) should not do <weirdness> when <that> is supplied
2. Describe "MyClass2"
   1. Describe "function7" (of MyClass2)
      1. it (function7) should return `true` when object1 is passed
      2. it (function7) should return `false` when object2 is passed

If you're using Mocha with ESLint, which you should be, you need to add Add `"mocha": true` to .eslintrc.json in the `env` section so ESLint knows to expect Mocha functions like `before()`, `describe()`, and `it()`.

Example test file : 
```javascript
const assert = require('assert').strict;
const ClassToTest = require('../ClassToTest');

// Test ClassToTest class
describe('ClassToTest', () => {
  // Test 'sum' function
  describe('sum', () => {
    // Test positive integer sum case
    it('should correctly add two positive integers', () => {
      const result = MathForFun.sum(1, 2);
      assert.equal(result, 3);
    });
  });

  // Test 'subtract' function
  describe('subtract', () => {
    // Test positive integer subtract case
    it('should correctly subtract two positive integers', () => {
      const result = MathForFun.subtract(5, 2);
      assert.equal(result, 3);
    });
  });
});
```

### Hooks
There are four main lifecycle hooks you can use to do work and cleanup before/after your tests execute :
1. beforeAll - Invoked before any of your tests execute
2. beforeEach - Invoked before every test
3. afterEach - Invoked after every test
4. afterAll - Invoked after all tests have executed

In the past you would include a `done()` function for testing asynchronous code.  But, for awhile now Mocha has supported native Promises so you can simply return a promise and the test will run until it has resolved (passed) or rejected (failed).

You might also be interested in [Chai as Promised](https://www.npmjs.com/package/chai-as-promised) for asynchronous assertions.  See the following `Chai` section.

## [Chai](https://www.chaijs.com/guide/styles/#expect)
[Chai](https://www.chaijs.com/guide/styles/#expect) is a framework that provides more natural language friendly assertions.  There are three main interfaces that have the same effect but with a different layout - `should()`, `expect()`, and `assert()`.  I always use `expect()` but you can get the same behavior out of all of them.

If we needed to test that a variable was of type `string` with only the native Assert module we would write something like `assert(typeof myVar === 'string')`.  With Chai/Expect we can make it a little more easily readable as `expect(myVar).to.be.a('string');`.  Of course, you would need to import `chai.expect`, see below for a more complete example : 

```javascript
const expect = require('chai').expect;

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(tea).to.have.property('flavors').with.lengthOf(3);
```

## Putting it all together
You can run ESLint and Mocha separately via NPM, or manually, but it would make more sense to execute them every time you fire the NPM `test` stage.  To do this, simply add both commands, separated by a semicolon (works on *nix) or `&&` (works on windows), to your `npm.scripts.test` definition : 

```javascript
{
  "name": "mocha-test",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "eslint-init": "./node_modules/.bin/eslint --init",
    "test": "./node_modules/.bin/eslint . && node node_modules/mocha/bin/mocha",
    "lint": "./node_modules/.bin/eslint ."
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "mocha": "^8.4.0"
  },
  "devDependencies": {
    "chai": "^4.3.4",
    "eslint": "^7.26.0",
    "eslint-config-airbnb-base": "^14.2.1",
    "eslint-plugin-import": "^2.22.1"
  }
}

```