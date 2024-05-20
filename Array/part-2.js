const myArray = ["1", "2", "3", "4", "5"];
myArray.splice(1, 3, "a", "b", "c", "d");
console.log(myArray);
// myArray is now ["1", "a", "b", "c", "d", "5"]
// This code started at index one (or where the "2" was),
// removed 3 elements there, and then inserted all consecutive
// elements in its place.


const myArray2 = ["Wind", "Rain", "Fire", "MOHD","mamoon","Shaikh","mohd"];
const myArray3=[2,3,1,7,3,4,8,9,3,1,0]
const srt1=myArray2.sort();
console.log(srt1);
const srt2=myArray3.sort()
console.log(srt2);