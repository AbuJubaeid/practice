// **new keyward**

// 1. new keyward nijei ekta empty object create korbe....
// 2. this sei object ke indicate korbe....
// 3. abar ei new keyward ti oi object ke return korbe
// 4. Object.create er kaj o korbe ei new keyward

function createUser(firstName, age, email){
    this.firstName = firstName
    this.age = age
    this.email = email
    
}


createUser.prototype.about = function(){
    return `name id ${this.firstName} and age is ${this.age}`
}
createUser.prototype.is18 = function(){
    return this.age>=18
}


let user1 = new createUser("jubaeid", 24, "jubaeid@gmail.com")

console.log(user1)
console.log(user1.about())
