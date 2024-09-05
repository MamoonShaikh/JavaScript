const codding = ["python", "C++", "C", "JAVA","JS","NodeJS"]
// codding.forEach(function (item){
// console.log(item);
// })

// codding.forEach( (item)=>{
//     console.log(item)
// })

// function printme(val){
//     console.log(val);
// }
// codding.forEach(printme);

codding.forEach((item,index,arr)=>{
console.log(item,index,arr);
})


const mycodding = [{
    language: "javascript",
    filename: "js"
},{
    amount:2000,
    method:"online"
},{}] 

mycodding.forEach((item)=>{
console.log(item.language)
})

