// **clone array**

// ==>spread operator
let array1 = ["pranto", "rahim", "karim"]
let array2 = ["jakir", "sattar", "joy"]
let array3 = [...array1,...array2]
console.log(array3)

// ==>concat()
let array1 = ["pranto", "rahim", "karim"]
let array2 = ["jakir", "sattar", "joy"]
let array3 = [].concat(array1, array2)
console.log(array3)

let array1 = ["pranto", "rahim", "karim"]
let array2 = ["jakir", "sattar", "joy"]
let array3 = array1.concat(array2)
console.log(array3)

// ==>slice
let array1 = ["pranto", "rahim", "karim"]
let array2 = ["jakir", "sattar", "joy"]
let array3 = array2.slice(0)
console.log(array3)
