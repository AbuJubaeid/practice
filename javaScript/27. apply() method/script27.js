// **apply() method**

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

// about.apply(user4, "gardening", "riding")
// ei error ti dibe array hisebe na likhle
// ==>Uncaught TypeError: CreateListFromArrayLike called on non-object

about.apply(user4, ["gardening", "riding"])