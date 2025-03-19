// **prototype**

// ===> amra jokhon ekti function create kori tokhon oi function ti create howar pasapasi ekti empty object o create kore jake amra prototype boli....

function createUser(firstName, age, email){
    user = Object.create(createUser.prototype)
    user.firstName = firstName
    user.age = age
    user.email = email
    
    return user
}


createUser.prototype.about = function(){
    return `name id ${this.firstName} and age is ${this.age}`
}
createUser.prototype.is18 = function(){
    return this.age>=18
}


let user1 = createUser("jubaeid", 24, "jubaeid@gmail.com")

console.log(user1)
console.log(user1.about())