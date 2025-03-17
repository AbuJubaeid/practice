// **call() method**

let user1 = {
    firstName : "Jubaeid",
    age : 22,
    about : function(){
        console.log(this.firstName, this.age)
    }
}

let user2 = {
    firstName : "Muntaha",
    age : 15
}

user1.about()
user1.about.call(user2)


// ===> another way

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

about.call(user1, "gardening", "riding")

