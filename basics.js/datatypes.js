// On the concept that How Data is Stored in memory and How data is Accessed , Data types can be Categorize itno Primitive and Non-Primitive.
// Primitive data types - They are call by value, copy of the original data can be generated and changes made in the copy not in original.
//                        They serve as the building blocks for data manipulation and are typically supported directly by the hardware.
// 7 Types : String , Number , Boolean , null ,undefined , Symbol , BigInt.

// Non-Primitive or Reference Type : They are call by reference . 
// types : Array , objects ,  

// Note - JavaScript is a dynamically typed language. This means that variable types are determined at runtime rather than at compile-time,
//  and a variable can hold any type of data at any time. You do not need to declare the type of a variable when you create it.

"use strict"; // treat all JS code as newer version

// alert( 3 + 3) // we are using nodejs, not browser

console.log(3 + 3) // code readability should be high

console.log("Hitesh")


let name = "hitesh"
let age = 18
let isLoggedIn = false
let state;

// number => 2 to power 53
// bigint
// string => ""
// boolean => true/false
// null => standalone value
// undefined => 
// symbol => unique


// object

console.log(typeof undefined); // undefined
console.log(typeof null); // object