# Lab 003 - Vehicle Data (Part 3)
In this lab you're going to take predefined data in multiple arrays and apply multiple operations we've covered to join the data together.  Once the logic is complete you will output the results in an easy to read format.

## Important Note
There are many ways to solve this problem.  As an exercise in how people approach problems differently, you will be presenting your solution to the class in the next class that follows the assignment deadline.

## Part 3 - Requirements
Pay very close attention to the requirements list to ensure you don't miss any details.  If you have any questions or if anything is unclear, please ask.

1. At this point, after Part 1 and Part 2, you should have an array containing all vehicles that : 
   1. Are **NOT** a salvage
   2. Are ordered chronologically, ascending, by year
   3. Include a `recallReason` if a recall was found
2. Group all of the remaining vehicles by "Make"  That is, you should be able to create an array that contains all "Honda", a separate array that contains all "Chevrolet", etc
   1. **RESTRICTION** : You are not allowed to hard code the make in your code.  Therefore you can not do something like `if (make === 'Ford')`.  This also prohibits you from doing something like `const hondaList = <findAllHondas>`.  This logic should be 100% dynamic such that you can handle any number or variation of make **without** changing your code.  
3.  Output each Make array to the console, ordered by year (from part 1), with recall details included (from part 2), and all salvaged vehicles removed (from part 2)
4.  Step 5 should be in an easy to read format - use new lines and tabs for formatting.  Be sure to include information that tells the user what they output represents, do not simply output numbers with no descriptions.
5.  Output the following stats : 
    1.  Total number of vehicles you started with
    2.  Total number of non-salvage vehicles of each Make
    3.  Total number of vehicles that were removed due to salvage
    4.  Total number of non-salvage vehicles of each year model, regardless of Make.


