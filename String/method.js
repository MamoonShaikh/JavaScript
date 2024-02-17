let name = "Mohd Mamoon Shaikh ";
let skill = "Data Analytics Web Developer";

// Concatenate strings
console.log(name + skill);

// Template literals string
console.log(`My name is ${name} and my skill is ${skill}`);

// Uppercase string
console.log(name.toUpperCase());

// Lowercase string 
console.log(skill.toLowerCase());

// Search string for index 
console.log(name.indexOf("S"));

// Search string for character
console.log(skill.charAt(3));

// Find string from position to
console.log(name + skill.substring(0, 21));


// ****************--- SLICE STRING ---************************//

const str = 'My name is Mohd Mamoon Shaikh and I am from Rudauli.';
console.log(str.length); // 52

console.log(str.slice(-16, -1)); // Expected output: "from Rudauli"

console.log(str.slice(0, 8)); // Expected output: "My name"

console.log(str.slice(0, 53)); // Expected output: "My name is Mohd Mamoon Shaikh and I am from Rudauli."

console.log(str.slice(-9, -5)); // Expected output: "Ruda"
