// Array -The Array object, as with arrays in other programming languages,
// enables storing a collection of multiple items under a single variable name

// Array is a type of non-primitive datatype in Javascript.

// Features of Array in javascript -

// * JavaScript arrays are resizable and can contain a mix of different data types.
// * JavaScript arrays are not associative arrays and so, array elements cannot be accessed
//   using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) 
//   as indexes.
// * JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — 
//   and the last element is at the value of the array's length property minus 1.
// * JavaScript array-copy operations create shallow copies

// Shallow copies - A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) 
//  as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you may also cause the other object to change too. 
//  That behavior contrasts with the behavior of a deep copy, in which the source and copy are completely independent.



const arr = [2,4,6,4,5,7,8]
console.log(arr)

const arr_1 = new Array(1,4,3,6,8,90,45,67)
console.log(arr_1[0])  // Access element of an array using indices.

// Array methods-

arr_1.push(200)
arr_1.pop()
console.log(arr_1)

arr_1.unshift(9) // push element at starting position , at 0th index
arr_1.shift() // remove starting element from the array in Js.  
arr_1.shift()
console.log(arr_1)

console.log(arr.includes(9)) // it return boolean values
console.log(arr.indexOf(9)) // if element not exist, it return -1.

const newarr = arr.join() // convert array into string form , [2,3,4] --> 2,3,4
// console.log(newarr)
// console.log(typeof newarr) // return string

// slice and splice method and their difference -

console.log(arr.slice(1,3)) //last range is not incled, here 3rd index is not include.
console .log(arr) // [2,4,6,4,5,7,8]

console.log(arr.splice(1,3)) // include 3rd index element and remove subarray(that we find using slicing) from original array 
console.log(arr) // [2,5,7,8]




