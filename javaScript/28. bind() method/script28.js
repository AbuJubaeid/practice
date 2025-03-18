// **bind() method**

function about(hobby, favourite){
    console.log(this.firstName, this.age, hobby, favourite)
}


let user3 = {
    firstName : "Jubaeid",
    age : 22,
    
}

let user4 = {
    firstName : "Muntaha",
    age : 15
}

let user = about.bind(user4)
user()