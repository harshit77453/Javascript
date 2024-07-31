if(true){
    // inside code will be executed
}
if(false){
    // inside code will not executed
}
// Operator 
// >,<,<=,>=, == , != ,=== , !==
// difference b/w == and ===
// === check values as well as data types of the two diiferent value.
if (2 == "2"){                // condition True
    console.log("executed")   
}
if (2 === "2"){               // condition False
    console.log("executed")  
}

const isUserloggedIn = true
const temperature = 41

// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }

// const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// Implicit Function -
// if (balance > 500) console.log("test"),console.log("test2");
// The above line code is not a good way to write 

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}