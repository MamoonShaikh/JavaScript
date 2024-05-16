// Creating an array
let myArr = [1, 'two', true, { name: 'mamoon' }];
let myArr2 = [2, 4, 5, 'mohd', { name: 'shaikh' }, 55];

// Accessing elements
console.log(myArr[0]); // Output: 1
console.log(myArr[3]); // Output: 'two'

// Adding elements
myArr.push(5); // Adds 5 to the end of the array
console.log(myArr);

// Removing elements
myArr.pop(0); // Removes the last element from the array
console.log(myArr);
console.log(myArr.length);

//To delete elements from the middle of an array in JavaScript
console.log("splice", myArr);
const newarr = myArr.splice(0, 3);
console.log(myArr);
console.log(newarr);

// Length of the array
console.log(myArr.length); // Output: 4

//Slice Array
console.log(myArr2.length);
const newarr2=myArr2.slice(2,5)
console.log(newarr2)
let keys=Object.values(myArr2[4])
console.log(keys);
