const coding = ["js","py","C++","Java"]

// coding.forEach((item)=>{
//     console.log(item);
// })

const values = coding.forEach((item)=>{
    // console.log(item);
    return item 
})

console.log(values)  // output - undefined, forEach loop doesn't return any value 


// Basics of Filter -

const mynums = [1,2,5,7,8,9,4]
// Impilicitly return 
const values1 = mynums.filter( (num)=> num >= 4)
// using return keyword
const values2 = mynums.filter( (num)=> {
    return num >= 4
})
console.log(values1) 
console.log(values2)                              // it output as - [ 5, 7, 8, 9, 4 ] , filter return each value in an array that satisfy Condition.


const mynums2 = [1,2,3,4,5,6,7,8,9,10]
//const values3 = mynums2.map((num)=> num*10).map((num) => num+1)
const values3 = mynums2.map((num)=> num*10).map((num) => num+1).filter((num)=> num >=40)
console.log(values3)

// Array.reduce()-
const myNums = [1, 2, 3]

// const myTotal = myNums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);