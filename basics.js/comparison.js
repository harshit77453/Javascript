// console.log(2>1);
// console.log(2>=1);
// console.log(5<9);

// Type script does'nt allow to compare different types of data but in javascript we can perform

console.log("2">1); // O/t = true
console.log("02">1); // output = true

// Special case to remember - These type of comparison is always Confusing, So we have to avoid such types of operations.

console.log(null > 0); //false 
console.log(null >= 0); //true
console.log(null == 0); // false

// The reason above statements is that an equality check == and Comparison < , > , <= , >= work differently . 
// Comparison convert null into number , treats as it 0. That'why null >= 0 is true and null > 0 is false.

console.log(undefined > 0); // false
console.log(undefined < 0); //false
console.log(undefined == 0); //false


// strict comparison (===) - It is check equality but also check data types of two different types.

console.log("2" === 2); // false
console.log(2 === 2); //true
console.log("2" == 2); //true
