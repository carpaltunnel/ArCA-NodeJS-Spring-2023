# Lab 003 - Vehicle Data (Arrays, Loops, and Conditionals)
In this lab you're going to take predefined data in multiple arrays and apply multiple operations we've covered to join the data together.  Once the logic is complete you will output the results in an easy to read format.

## Important Note
There are many ways to solve this problem.  As an exercise in how people approach problems differently, you will be presenting your solution to the class in the next class that follows the assignment deadline.

## Requirements
Pay very close attention to the requirements list to ensure you don't miss any details.  If you have any questions or if anything is unclear, please ask.

1.  Create new arrays for each "Make" of vehicle.  
    1.  Each new array should only contain vehicles of the same make and the array variable should be named appropriately (EG: const teslaVehicles)
2.  Order each new Make array by vehicle year in ascending order
3.  Add recall details from the recallList to each vehicle (based on VIN)
4.  Remove any vehicles that have a salvage title (based on VIN)
5.  Output each Make array to the console, ordered by year (from step 2), with recall details included (from step 3), and all salvaged vehicles removed (from step 4)
6.  Step 5 should be in an easy to read format - use new lines and tabs for formatting
7.  Output the following stats : 
    1.  Total number of vehicles you started with
    2.  Total number of non-salvage vehicles of each Make
    3.  Total number of vehicles that were removed due to salvage
    4.  Total number of non-salvage vehicles of each year model, regardless of Make.

## Restrictions
Do not hard code your array names like "const teslaVehicles" - assume the vehicle list contains an unknown number of makes and generate the variable names dynamically.  

## Example
Given : 
```javascript
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
```

Your output would be something like :
```
Toyota (model, year, vin, recallReason):
	Tundra, 1986, d81d10c5-504c-428c-b174-2209f7377c72, N/A
	Tundra, 1988, 3e51c23e-abad-4f01-974d-37be0366514d, Leaf springs


Ford (model, year, vin, recallReason):
	Mustang, 2000, 066ac424-60f8-46e6-bf77-a52314a5b919, N/A


Chevrolet (model, year, vin, recallReason):
	Silverado, 2009, 5dd65083-b991-4a0a-8cd5-5cb324dad29f, N/A


Total number of vehicles processed : 5
Total (non-salvage) number of each make :
	Toyota: 2
	Ford: 1
	Chevrolet: 1
Total number of vehicles removed due to salvage : 1
Total (non-salvage) number of each year :
	1986: 1
	1988: 1
	2000: 1
	2009: 1
```
