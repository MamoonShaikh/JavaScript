//three tyepes of logical operators in java script;
/*
these are 
1. logical-and = &;
2. logical-or = ||;
3. logical-not = !;
*/

let a = 5;
let b = 5;
let c = 10;
let d = "10";

/*1. The logical AND operator (&&) returns true if both operands are true; 
otherwise, it returns false.
*/
console.log(a===b && a < c);// true
console.log(a===b && c===d);//false

/*
2. The logical OR operator (||) returns true if at least one of the operands is true;
 otherwise, it returns false.
*/
console.log(a===b || c===d);//true
console.log(c===d || a<b); //false

/*
3. he logical NOT operator (!) returns the opposite boolean value of its operand.
 If the operand is true, it returns false; if the operand is false, it returns true.
*/
let yes = a===b;
let not = c===d ;
console.log(!yes ); //flase
console.log(!not); //true