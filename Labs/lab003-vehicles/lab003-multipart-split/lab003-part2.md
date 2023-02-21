# Lab 003 - Vehicle Data (Part 2)
In this lab you're going to take predefined data in multiple arrays and apply multiple operations we've covered to join the data together.  Once the logic is complete you will output the results in an easy to read format.

## Important Note
There are many ways to solve this problem.  As an exercise in how people approach problems differently, you will be presenting your solution to the class in the next class that follows the assignment deadline.

## Part 2 - Requirements
Pay very close attention to the requirements list to ensure you don't miss any details.  If you have any questions or if anything is unclear, please ask.

1. Create an array of vehicles that has all VINs associated with a salvage removed.  That is, you should create an array that contains all vehicles from the original `vehicles` array that do **NOT** exist in the `salvageVINs` array.
2. Output the total number of vehicles you originally started with in a descriptive and easy to read format.
3. Output the number of vehicles that were removed due to salvage in a descriptive and easy to read format.
4. Enhance the remaining vehicle data by adding a new property named `recallReason` to any vehicle that has an associated recall in the `recalls` array based on the `vin` property.  The "reason" can be found in the `recalls` array.
5. Output the total number of recalls you had available to search in a descriptive and easy to read format.
6. Output the total number of vehicles with recalls that you found and enriched with the recallReason in a descriptive and easy to read format.

