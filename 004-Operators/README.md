# Operators
## Mathematical Operators
| Operator      | Name | Example | 
| ----------- | ----------- | ----------- |
| + | Addition | x + y |
| - | Subtraction | x - y |
| * | Multiplication | x * y |
| ** | Exponentiation | x ** y
| / | Division | x / y |
| % | Modulus | x % y |
| ++ | Increment | x++ |
| -- | Decrement | x-- |

<strong>NOTE : </strong> [Order of operations](https://en.wikipedia.org/wiki/Order_of_operations) apply in the same way as they do for standard math.  For example, <em>1 + 2 * 3</em>, will execute in the following order :
1.  2 * 3 = 6
2.  1 + 6 = 7

As with standard math [order of operations](https://en.wikipedia.org/wiki/Order_of_operations), parentheses have higher priority.  For example, <em>( 1 + 2 ) * 3</em>, will execute in the following order : 
1. 1 + 2 = 3
2. 3 * 3 = 9


## Assignment Operators

| Operator      | Example | Same As |
| ----------- | ----------- | ----------- |
| =  | x = y   | |
| += | x += y   | x = x + y |
| -= | x -= y   | x = x - y |
| *= | x *= y   | x = x * y|
| /= | x /= y   | x = x / y|
| %= | x %= y   | x = x % y|
| **=| x **= y  | x = x ** y |





## String Operators
CAN Concat with + or +=

## Comparison Operators
| Operator      | Name | Example | 
| ----------- | ----------- | ----------- |
|  == | equal to  |  x == y  |
|  === | equal value and equal type  | x === y   |
|  != | not equal  | x != y  |
|  !== | not equal value or type  |  x !== y |
| >  | greater than  |  x > y |
| <  | less than  | y < x  |
| >=  | greater than or equal to  |  x >= y  |
| <=  | less than or equal to  | y <= x  |
| ?  | ternary | x ? y : z | 

Equality operators (double v triple equal with type conversion)

## Logical Operators
*&&* : logical and

*||* : logical or

*!*  : logical not


## Type Operators
*typeof* : Returns the type of a variable

*instanceof* : Returns true if an object is an instance of an object type


## Bitwise Operators
| Operator | Name | Example | Equivalent | Result | Decimal | 
| ----------- | ----------- | ----------- | ----------- | ----------- | ----------- |
| & |AND|5 & 1|0101 & 0001|0001|1|
|\||OR	| 5 \| 1 |0101 \| 0001|0101 |5|
|~|NOT|~ 5| ~0101|1010 |10|
|^|XOR|5 ^ 1|0101 ^ 0001|0100|4|
|<<|Zero fill left shift |5 << 1 |0101 << 1 |1010 |10|
|>>|Signed right shift |5 >> 1 |0101 >> 1 |0010 |  2|
|>>> |Zero fill right shift |5 >>> 1 |0101 >>> 1 |0010 |  2|