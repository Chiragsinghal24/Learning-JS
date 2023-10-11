//define our own functions

let name = function(nameparameter) {
    console.log("greeting message for user");
    console.log(`hey ${nameparameter}` );
}

name('john')   //calling the function with parameter

let fullNameMaker = function(firstname, lastname) {
    console.log('welcome to lco')
    console.log(`thankyou ${firstname} ${lastname}`)
}

fullNameMaker('john','ji')


let myAdder = function(num1,num2){
    let added=num1+num2
    return added
}

myAdder(3,5)

