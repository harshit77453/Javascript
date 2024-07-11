const arr1 = ["A","B","c"]
const arr2 = ["D","E","F"]
arr1.push(arr2)
console.log(arr1) // arr2 is added into arr1 as a single element at last.
console.log(arr1[3][1])

arr1.concat(arr2)
console.log(arr1) // give output same as when we use push function.

// Note - for concat methoed, we must have to store it into new variable.

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