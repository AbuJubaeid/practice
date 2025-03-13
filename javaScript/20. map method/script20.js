// **map() method**

let person = [
    {firstName: "jubaeid", age: 24},
    {firstName: "rahim", age: 23},
    {firstName: "karim", age: 25},
    {firstName: "wasi", age: 26},
]

// function myFunc(user){
//     return user.firstName
// }

const names = person.map((name)=>{
    return name.firstName
})

console.log(names)