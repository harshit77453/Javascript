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
    console.log("z inside Block",y) // 100
}
console.log(z) // 100

// 

function one(){
    const username = "Harshit"
    function two(){
        const website = "xyz.com"
        console.log(username)  // Harshit     ,outside function variable vallue can be access inside function.
    }
    //console.log(website)  // ReferenceError: website is not defined i.e - outside function cant'nt access inside function value.
    two()
}
one()




if(true){
    const username = "Harshit"
    if(username === "Harshit"){
        const website = "Youtube"
        console.log(username + website)
    }
    //console.log(website) - provide error: website is not defined
}
// console.log(username) - provide error: website is not defined



 // ******* Interesting Concept *********

console.log(addone(5))  // provide output-6 ,access before function initialization.
function addone(num){  // Known as function
    return num+1
}
 

//console.log(addtwo(5))  // Give error - when we store function into a variable, we can'nt access before function initialization
const addtwo = function(num){  // known as function or expression as funtion is assign to a variable.
    return num + 2
}
console.log(addtwo(5))  // 7