//creating the todo list

const myTodos = []

myTodos.push('Buy Bread')
myTodos.push('Record Videos for youtube')
myTodos.push('Go to Gym')

myTodos.forEach(function(todo, index){
    console.log(`Your taks no. ${index+1} is: ${todo}`)
})