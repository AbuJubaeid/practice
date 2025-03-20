// **class**

class CreateUser{
    constructor(firstName, age, email){
        this.firstName = firstName
        this.age = age
        this.email = email
    }
    about = function(){
        return `name id ${this.firstName} and age is ${this.age}`
    }
    is18 = function(){
        return this.age>=18
    }
}

let user1 = new CreateUser("jubaeid", 24, "jubaeid@gmail.com")

console.log(user1)
console.log(user1.about())