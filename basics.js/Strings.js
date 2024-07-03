//JavaScript strings are immutable. This means that once a string is created, it is not possible to modify it. 
// String methods create new strings based on the content of the current string — for example:

// * A substring of the original using substring().
// *A concatenation of two strings using the concatenation operator (+) or concat().


let name = "Harshit chauhan";

let age = 20;

console.log("My name is "+name+" and "+ "Age is "+ age);

// another way of strings representation - String Interpolation.
console.log(`My name is ${name} and My Age is ${age}`);

// another way to declare Strings - This will create string in objects i.e stored value in key value pair.

const Name = new String("Harshit");

console.log(Name);
console.log(Name[0]);
console.log(Name[1]);
console.log(Name.__proto__);  // {} i.e object
console.log(Name.length); // 7

// We have different method for , here we explain some of them.
console.log(Name.toUpperCase());
console.log(Name.charAt(3)); // we can pass index as argument in chatAt(index) and it will return 
console.log(Name.indexOf("H")); // return index of character pass as argument.

const newString = Name.substring(0,4); // substring(startIndex,EndIndex) - endIndex is not include
console.log(newString); // Hars

const anotherString = Name.slice(-7,4) // we also access substring by Negative Index using slice().
console.log(anotherString);

const url = "https:abc%20harshitchauhan.com";
console.log(url.replace('%20',"--"));

const name_1 = "    Harshit Chauhan    ";
console.log(name_1.trim());

console.log(url.includes('harshit')) // print true is string exist