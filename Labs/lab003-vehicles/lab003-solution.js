const vehicles = [
  {"make":"Ford","model":"Fusion","year":2007,"vin":"9a11ff3c-7d9d-41bf-8b20-b8f26ebad785"},
  {"make":"Toyota","model":"Tundra","year":1986,"vin":"d81d10c5-504c-428c-b174-2209f7377c72"},
  {"make":"Ford","model":"Mustang","year":2000,"vin":"066ac424-60f8-46e6-bf77-a52314a5b919"},
  {"make":"Toyota","model":"Tundra","year":1988,"vin":"3e51c23e-abad-4f01-974d-37be0366514d"},
  {"make":"Chevrolet","model":"Silverado","year":2009,"vin":"5dd65083-b991-4a0a-8cd5-5cb324dad29f"},
];

const recalls = [
  {"vin":"9a11ff3c-7d9d-41bf-8b20-b8f26ebad785","reason":"Risk of fire"},
  {"vin":"3e51c23e-abad-4f01-974d-37be0366514d","reason":"Leaf springs"},
  {"vin":"bd283567-8114-44a6-82cb-112bde49fa6e","reason":"Electronics failure"},
];

const salvageVINs = [
  "9a11ff3c-7d9d-41bf-8b20-b8f26ebad785",
  "935f8245-8816-42cf-9ea6-594286e3df0d",
];  

// Sort ascending
vehicles.sort((car1, car2) => car1.year > car2.year ? 1 : -1);

const grouped = {};
let salvageCounter = 0;

vehicles.forEach((car) => {
  // Attach recall data to temp var "car"
  recalls.forEach((recall) => {
    if (recall.vin === car.vin) {
      car.recallReason = recall.reason;
    }
  });

  // Exclude salvages
  if (!salvageVINs.includes(car.vin)) {
    // Group by make
    if (grouped[car.make]) {
      grouped[car.make].push(car);
    } else {
      grouped[car.make] = [car];
    }
  } else {
    salvageCounter++;
  }
});

Object.keys(grouped).forEach((group) => {
  console.log(`${group} (model, year, vin, recallReason):`);
  grouped[group].forEach((vehicle) => {
    console.log(`\t${vehicle.model}, ${vehicle.year}, ${vehicle.vin}, ${vehicle.recallReason ?? 'N/A'}`);
  });
  console.log('\n');
});

const yearCount = {};
Object.keys(grouped).forEach((group) => {
  grouped[group].forEach((forYear) => {
    if (yearCount[forYear.year]) {
      yearCount[forYear.year]++;
    } else {
      yearCount[forYear.year] = 1;
    }
  });
});


console.log(`Total number of vehicles processed : ${vehicles.length}`);
console.log(`Total (non-salvage) number of each make :`);
Object.keys(grouped).forEach((group) => {
  console.log(`\t${group}: ${grouped[group].length}`);
});
console.log(`Total number of vehicles removed due to salvage : ${salvageCounter}`);
console.log(`Total (non-salvage) number of each year :`);
Object.keys(yearCount).forEach((year) => {
  console.log(`\t${year}: ${yearCount[year]}`);
});
