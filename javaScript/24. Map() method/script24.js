// **Map()**
// object er moton kaj kore

let items = new Map()

items.set(1, "one")
items.set("firstName", "Pranto")
console.log(items)
console.log(items.get("firstName"))

// for(let key in items){
//     console.log(`${key} : ${items[key]}`)
// }

for(let key of items.keys()){
    console.log(key)
}

for(let [key, value] of items){
    console.log(key, value)
}

let person = {
    firstName: "Jubaeid",
    age: 22
}

console.log(person.firstName)

let map = new Map()

map.set(person, {id:1, lastName: "Chako"})

console.log(map)

//person theke lastName paite gele evabe paite hobe
console.log(map.get(person).lastName)

let newMap = new Map([["firstName", "Jubaeid"], ["lastName","Chako"]])
console.log(newMap)
