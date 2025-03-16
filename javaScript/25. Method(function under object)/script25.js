// method
// kono object er vitor key er value hisebe function thakle tai method


let person = {
    firstName: "jubaeid",
    age: 22,
    about: function(){
        console.log(`name is ${this.firstName} and age is ${this.age}`)
    }
}

person.about()
// ami jokhon function ti call korbo se somoy ei function tir pase je objecti thakbe "this" sei object kei dharon korbe


function personInfo(){
    console.log(`name is ${this.firstName} and age is ${this.age}`)
}

let person1 = {
    firstName: "wasi",
    age: 16,
    about: personInfo
}

person1.about()


function personInfo(){
    console.log(`name is ${this.firstName} and age is ${this.age}`)
}

let person2 = {
    firstName: "Jami",
    age: 16,
    about: personInfo
}
let person3 = {
    firstName: "Sami",
    age: 16,
    about: personInfo
}
let person4 = {
    firstName: "Sunvi",
    age: 16,
    about: personInfo
}

person2.about()
person3.about()
person4.about()
