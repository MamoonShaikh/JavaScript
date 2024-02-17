/* Seven types of bitwise operators in java script
these type 
1. bitwise AND = &;
2. bitwise OR = |;
3. bitwise XOR = ^;
4. bitwise NOT = ~;
5. bitwise LeftShift = <<;
6. bitwise RightShift = >>;
7. bitwise Zero-fill RightShift = >>>;
*/

let a = 6;
let b = 3;
let c = 2;

/*1. Bitwise AND (&):
Syntax: operand1 & operand2
Description: Returns a one in each bit position where both operands have a one.
*/
console.log(a & b); //output = 2
console.log(b & c); //output = 2

/*
2. Bitwise OR (|):
Syntax: operand1 | operand2
Description: Returns a one in each bit position where at least one of the operands has a one.
*/
console.log(a | b); //output = 7
console.log(a | c); //output = 6

/*
3. Bitwise XOR (^):
Syntax: operand1 ^ operand2
Description: Returns a one in each bit position where only one of the operands has a one.
*/
console.log(a ^ b); //output = 5
console.log(c ^ b); //output = 1

/*
4. Bitwise NOT (~):
Syntax: ~operand
Description: Inverts the bits of its operand (i.e., changes ones to zeros and zeros to ones).
*/
console.log(~a); //output = -7
console.log(~b); //output = -4
console.log(~c); //output = -3


