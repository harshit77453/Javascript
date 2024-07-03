// Primitive data types - They are call by value, copy of the original data can be generated and changes made in the copy not in original.
//                        They serve as the building blocks for data manipulation and are typically supported directly by the hardware.
// 7 Types : String , Number , Boolean , null ,undefined , Symbol , BigInt.

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
// 2- Objects
let myObj = {
    name: "hitesh",
    age: 22,
}

// 3- functions
const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);