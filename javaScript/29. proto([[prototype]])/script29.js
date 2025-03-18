// **proto/[[prototype]]**

// const user = {
//     firstName : "Johan",
//     lastName : "chako",
//     age : 20,
//     email : "johan@gmail.com",
//     about : function(){
//         return `${this.firstName}, ${this.age}`
//     },
//     is18 : function(){
//         return `${this.age>=18}`
//     }
// }

// console.log(user.firstName)
// console.log(user.about())

//===> hajar hajar user create korte hole evabe bar bar user create kora impossible. tai nicher system e korte hoobe

// function createUser(firstName, lastName, age, email){
//     const user = {}
//     user.firstName = firstName
//     user.lastName = lastName
//     user.age = age
//     user.email = email
//     user.about = function(){
//                 return `${this.firstName}, ${this.age}`
//            }
//     user.is18 = function(){
//         return `${this.age>=18}`
//     }
//     return user
// }

// let user1 = createUser("jubaeid", "khan", 24, "jubaeid@gmail.com")

// console.log(user1)
// console.log(user1.about())
// console.log(user1.is18())
// ====>ekhane je function method hisebe use korsi seti protibar user create hobar somoy notun kore toiri hobe ebong protibari onek memory space dokhol korbe ja ekdomi thik noy


// let userMethod = {
//     about : function(){
//     return `${this.firstName}, ${this.age}`
// },
//     is18 : function(){
//     return `${this.age>=18}`
//     }
// }


// function createUser(firstName, lastName, age, email){
//     const user = {}
//     user.firstName = firstName
//     user.lastName = lastName
//     user.age = age
//     user.email = email
//     user.about = userMethod.about
//     user.is18 = userMethod.is18
    
//     return user
// }

// let user1 = createUser("jubaeid", "khan", 24, "jubaeid@gmail.com")

// console.log(user1)
// let jubaeid = user1.about()
// console.log(jubaeid)
// console.log(user1.is18())

// ====>evabe likhleo somossa holo ami jotobar method create korbo totobari amake 2nd object e method er reference add korte hobe....ekbar reference add korte vule gele sei method ti r kar korbe na...



let userMethod = {
    about : function(){
    return `${this.firstName}, ${this.age}`
},
    is18 : function(){
    return `${this.age>=18}`
    }
}


function createUser(firstName, lastName, age, email){
    const user = Object.create(userMethod)
    user.firstName = firstName
    user.lastName = lastName
    user.age = age
    user.email = email
    
    return user
}

let user1 = createUser("jubaeid", "khan", 24, "jubaeid@gmail.com")

console.log(user1)
let jubaeid = user1.about()
console.log(jubaeid)
console.log(user1.is18())

// ====>Object.create user object e ekti proto create korbe ja 1st object(userMethod) er reference hold korbe 