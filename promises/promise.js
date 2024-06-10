const promiseOne = new Promise(function(resolve,reject){
    // DO an asynk task
    // DB call, Cryptography, network
    setTimeout(function(){
        console.log('asynk task is complete');
        resolve()
    },2000)
})
promiseOne.then(function(){
    console.log('promise consumed');
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('asynk task 2nd is complete');
        resolve()
    },2000)
}).then(function(){
    console.log('promise 2nd consumed');
})

const promisethree= new Promise(function(resolve,reject){
setTimeout(function(){
  resolve({user:'mamoon',email:'mohd@shaikh.com'})   
},1500)
})
promisethree.then(function(user){
    console.log(user);
})