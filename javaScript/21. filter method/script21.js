// **filter() method**

let numbers = [2,3,4,5,8,9,10]


const evenNumbers = numbers.filter((number)=>{
    return number % 2 === 0
     })

console.log(evenNumbers)