const arr1 = ["A","B","c"]
const arr2 = ["D","E","F"]
arr1.push(arr2)
console.log(arr1) // arr2 is added into arr1 as a single element at last.
console.log(arr1[3][1])

arr1.concat(arr2)
console.log(arr1) // give output same as when we use push function.

// Note - for concat method, we must have to store it into new variable.

const arr3 = ["Harshit","Nikita"]
const arr4 = ["Chauhan","Pandey"]
const new_arr = arr3.concat(arr4)
console.log(new_arr)  


// another way to concat two or more arrays , concat method is limit to add only two array
const array1 = ["A","B"]
const array2 = ["C","D"]
const array3 = ["E","F"]
const array4 = ["G","H"]

const newarray = [...array1, ...array2]
const newarray2 = [...array1, ...array2, ...array3, ...array4]
console.log(newarray)
console.log(newarray2)

const my_arr = [1,2,3,[3,4,2],5,6,[8,9,[4,5,6]]]

console.log(my_arr.flat(2))  // return a new array with all subarray elements concatenated into it upto the specified depth,2 is the depth.\

console.log(Array.isArray("Harshit")) // false as no such name array exist.
console.log(Array.from("Harshit")) // return array of each word as element,['H','a','r','s','h','i','t']

// Interesting case
console.log(Array.from({name:"Harshit"})) // [] , here it get confused which key or value array it return, that's why it return empty array.

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1,score2,score3)) // of() - return a new array from a set of elements.
 
