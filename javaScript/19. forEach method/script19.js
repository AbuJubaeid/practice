// **foreach method**


// let array = [1,2,3,4,5]

// ami j parameter ei nei na keno ba parameter er j nam ei dei na keno forEach method index value and index number ei dibe.....
// function myFunc2(number, index){
//     console.log("number is", number)
//     console.log("index is", index)
// }
// // for(i=0; i<array.length;i++){
// //     myFunc2(array)
// // }
// array.forEach(myFunc2)


// ===>annonymous function
// let array = [1,2,3,4,5]

// function myFunc2(number, index){
//     console.log("number is", number)
//     console.log("index is", index)
// }
// // for(i=0; i<array.length;i++){
// //     myFunc2(array)
// // }

// //  annonymous function hisebe bebohar
// array.forEach(function(number, index){
//     console.log("number is", number)
//     console.log("index is", index)
// })


// ===>arrow function
// let array = [1,2,3,4,5]

// array.forEach((number, index)=>{
//     console.log("number is", number)
//     console.log("index is", index)
// })


let person = [
    {firstName: "jubaeid", age: 24},
    {firstName: "rahim", age: 23},
    {firstName: "karim", age: 25},
    {firstName: "wasi", age: 26},
]

person.forEach((name)=>{
    console.log(name.firstName)
})