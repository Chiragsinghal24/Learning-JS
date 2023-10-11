//this is learning the aspects of the fetch aspects 
//fetch is a global , return the promise
//promise error code-404 coming in response (not knowing the error codes)

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) =>{
    return response.json()
})
.then((data) =>{
    console.log(data);           //data is response json
})
.catch((error) =>{
    console.log(error);
})