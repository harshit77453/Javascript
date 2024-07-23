// Note- Most Popular Global Object in Browser is 'Window'

// this keyword concept- this keywors refer to current context 
const user = {
    username: "harshit",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username}, Welcome to the website`)
        console.log(this)  // output as user object values , as current context for this is block-scope.
    }
}

// user.welcomemessage()  // harshit, Welcome to the website

// user.username = "Sam"
// user.welcomemessage()  // Sam, Welcome to the website

console.log(this)      // {} , as their is no current context in global scope


// Arrow Function

// Note- this keyword is not able to access current instances values inside any function,it is used to access current instance of object.
// Example-
// function myuser(){
//     username:"Harshit"
//     console.log(this.username)    // undefined
// }
// myuser()

// const myuser = function(){
//     username:"Harshit"
//     console.log(this.username)     // undefined
// }

// myuser() 

const myuser = () =>{
    let username = "harshit"
    //console.log(this)                // {}
    console.log(this.username)       // undefined
}

myuser()


const one = (num1,num2) =>{
    return num1+num2
}

console.log(one(3,4))        // 7

// Arrow function is used as Implicit Return-

const two = (num1,num2) => num1+num2
console.log(two(3,4))                  // 7

const three = (num1,num2) => ({username:"harshit"})    // Parenthesis () must be used ,if we return object in Implicit Return Arrow Function 
console.log(three())
