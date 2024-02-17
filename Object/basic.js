// Symbols: Symbols are unique and immutable values in JavaScript.
// Each symbol value is unique,
//  even if they have the same description.
//  Symbols are typically used as unique identifiers.

const mysym1 = Symbol("key1");
const mysym2 = Symbol("key1");
console.log(mysym1 === mysym2); // Output: false (symbols are unique)

//Object Literal: objusers is an object created using object literal notation.
//It contains key-value pairs where keys are property names(identifiers or strings)
// and values are associated with those keys.

const objusers = {
    name: "mamoon",
    "full name": "mamoon sahikh",
    [mysym1]: "myKey",
    age: 20,
    location: "lucknow",
    email: "mamoon@gmial.com",
    isLoggedin: false,

}

//Accessing Object Properties: The console.log statements demonstrate how to access object properties 
//using both dot notation (objusers.name) 
//and bracket notation (objusers["email"] and objusers["full name"]).
// The computed property [mysym] is accessed using bracket notation (objusers[mysym]).

console.log(objusers.name);
console.log(objusers["email"]);
console.log(objusers["full name"]);
console.log(objusers[mysym1]);

//add value in object;

objusers.profession = "web developer";
console.log(objusers)