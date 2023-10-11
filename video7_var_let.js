let iAmGlobal='somevalue'

if(true){
    var iAmLocal='some,morevalue'
    iAmGlobal='superman'
    console.log(iAmGlobal);
    console.log(iAmLocal);
}

console.log(iAmGlobal);
console.log(iAmLocal);


//dont decalre with your variables with var until unless you make it global
//better approach use let always
//var can be used to dispaly the value outside the values also
//but let restrict the dispaly of outside the scope 