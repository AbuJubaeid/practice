// **reduce() method**

let product = [
    {productId : 1, productName: "mobile", productPrice : 12000},
    {productId : 2, productName: "laptop", productPrice : 52000},
    {productId : 1, productName: "earphone", productPrice : 2000}
]

const sumOfProduct = product.reduce((totalPrice, product)=>{
    return totalPrice + product.productPrice
}, 0)

console.log("Total product price is",sumOfProduct)