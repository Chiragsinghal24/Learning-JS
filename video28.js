function setUsername(username){
    this.username=username
    console.log("called");
}

function createUser(username,email,password){
    setUsername.call(this,username)
    this.password=password
    this.email=email
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);

