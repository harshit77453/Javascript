// IIFE - Intermediately Invoked Function Expressions

// it is used to immediately invoked the function after function decleration and the most importantly used to protect funtions scope
// from global scope Pollution.

// Syntax: (function{})();

// Normal function

function chai(name){
    console.log(`Hello, My name is ${name}`)
}
chai("Harshit");

// IIFE
(function fun(){
    console.log(`Hello My name is Harshit`)
})();                                          // here,';' semicolon is used to end the IIFE , bcz it's does'nt know where to end.

( (name)=>{
    console.log(`Welcome to the website ${name}`)
})("github.com");