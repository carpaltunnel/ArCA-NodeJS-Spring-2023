/**
 * populateArray - Create an array of random strings of size indicated
 * @param {Number} itemCount - number of items to generate
 * @returns {Array} items - Array of random strings
 */
const populateArray = (itemCount) => {
  const items = [];
  for (let x = 0; x < itemCount; x++) {
    items.push(Math.random().toString().substr(2, 8));
  }

  console.log(`Generated ${itemCount} strings`);
  return items;
}

/**
 * Print the array length then call iterateArray
 * @param {Array} items 
 */
const printArrayLengthThenIterate = (items) => {
  console.log(`Array contains ${items.length} items.`);
  iterateArray(items);
}

/**
 * Iterate through array and print values
 * @param {Array} items 
 */
const iterateArray = (items) => {
  let counter = 0;
  items.forEach((item) => {
    console.log(`\tItem ${counter++} is : ${item}`);
  });
}

/**
 * Main script driver, just to have a call stack
 */
const mainDriver = () => {
  const items = populateArray(10);
  printArrayLengthThenIterate(items);
};

// Execute
mainDriver();