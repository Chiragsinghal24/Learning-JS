const user ={
    username: "chirag",
    loginCount: 8,
    signedIn: true,
    getUserDetails:function(){
        console.log("user details")
        console.log(`${this.username}`)
    }
}

console.log(user.getUserDetails);
console.log(user.username);

// const promiseOne = new Promise()
// const date = new Date()

function User(username, loginCount, isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    return this
}

const userOne = new User("chirag",12,true)
const userTwo = new User("chirag22",12,true)

console.log(userOne);

//using the new keyword created the new object with empty 
//
