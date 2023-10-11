let myMultiplier = function(num1,num2) {
    return num1*num2
}

console.log(myMultiplier(2,3))


let guestUser= function(name='unname',courseCount=0){
    return 'hello '+ name +' and your course count is ' + courseCount
}


console.log(guestUser('john',10))
console.log(guestUser())
