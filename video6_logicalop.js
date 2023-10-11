//using the logical operators

// &&- and operator  (both side need to be true)
// ||- or operator (anyone of the side is true)


let isVerified= true;
let isLoggedIn= true;
let hasPaymentToken= true;
let isGuest= true;

if(isVerified && hasPaymentToken){
    console.log('okay u can by the course')
}
else if(isGuest){
    console.log('please verifiy')
}
