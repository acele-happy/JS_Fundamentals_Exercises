// Sort products
// You are given an array of product objects, each containing a name (string) and a price (number). Your task is to implement a function called sortProducts that sorts the products based on their prices in ascending order. 

let obj = [
    {
        name: 'gg',
        price:12
    },
    {
        name:"ff",
        price: 3
    }
]
const sortProducts = (obj)=>{
    return obj.sort((a,b)=> a.price-b.price)
}

console.log(sortProducts(obj))