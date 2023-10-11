// <!-- promise can be pending, rejected or fulfil -->

// the promise has two arguments resolve and reject
//resolve is called at the then condition
//then means do the task when the promise is executed
//reject is called at the catch condition
//catch means do the task when the promise is not executed
//resolve is directly connected to the then 


//promise means future m hone wali cheese

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task")
        resolve()
    },1000)
}).then(function(){
    console.log("Aync 2 resolved");
})

const promiseThree= new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'chirag'})
    },1000)
}).then(function(user){
    console.log(user);
})

const promiseFour = new Promise(function(resolve,rject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"chirag",password:"1234"})
        }
        else{
            reject('error:something went wrong')
        }
    },1000)
})

promiseFour
.then((user) =>{
    console.log(user);
    return user.username
})
.then((myusername)=>{
    console.log(myusername);
}
).catch(function(error){
    console.log(error)
}).finally(() => console.log('the promise is either resolved or rejected'))

//new approach using async wait exactly .then and and .catch
//asyn wait for the work for few seconds

const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"js",password:"1234"})
        }
        else{
            reject('js went went wrong')
        }
    },1000)
})

//async with await
//the value of promisefive save in the response

async function consumePromiseFive(){
    try{
        const response = await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumePromiseFive()


//calling of the Api and fetch the data from the API using asyn and try and catch

// async function getAllUser(){
//     try{
//         const response= await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch(error){
//         console.log(error);
//     }
// }

// getAllUser()
//other way of the upper function for implement

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error) =>{
    console.log(error);
})

//fetch ka data phele aa rha h baaki sb function ke 



