//exploring the important methods of the array

const numbers=['one','two','three','four','five']
numbers[1]='something'
console.log(numbers);



//start
numbers.shift()
console.log(numbers);  //shift the numbers to left index gone

numbers.unshift()   //inserting the values at the position 0
console.log(numbers)

//end

numbers.pop()  //remove the last element from the array

numbers.push('ram')  //push the element at the end of the array


//middle

numbers.splice(2,1,'something') //taking the starting elememt , delete how many place and add at last what to inser in the deleted position
