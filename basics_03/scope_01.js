let a = 20;
const b =  30;
var c = 40;

console.log(a)
console.log(b)
console.log(c)

// let,var,const provide same output why we need 3 such type of decleration ?

var x = 100

if(true){
    var x = 200;
}

console.log(x)  // 200

// that's why we generlly avoid use of var 


let y = 100
if (true){
    let y = 200  // here y is block scope variable which can't be access outside the {}.
    console.log("y inside Block",y) // 200
}
console.log(y) // 100 (y is the global scope variable)

const z = 100
if (true){
    const z = 200 
    console.log("y inside Block",y) // 100
}
console.log(z) // 100



