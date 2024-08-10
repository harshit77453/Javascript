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
