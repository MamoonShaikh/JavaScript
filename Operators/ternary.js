// check to you can vote or not
let age = 18; // Assuming age is declared and assigned a value
let vote = (age >= 18 ? "you can vote" : "you can't vote");
console.log(vote);


//check Assigning a Value:
let rainning = false;
let action = rainning ? "take an umbrella" : "enjoy the weather ";
console.log(action);


//check Odd or Even number
function OddorEven(num) {
    return (num % 2 === 0 ? "is Even number" : "is Odd number");
}
console.log(OddorEven(666));
console.log(OddorEven(5));
console.log(OddorEven(4));


//Using Ternary Operator in Template Literals
let old = 9;
let message = ` you are ${old > 18 ? 'a adult' : 'a minor'}.`;
console.log(message);
