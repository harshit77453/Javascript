function sayMyName(){
    console.log("H");
    console.log("I");
    console.log("T");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

// const result1 = addTwoNumbers(3,4) 
// console.log(result1)  O/p = undefined, bcz if we use console inside function, we can't store function output in any variable,
// if function return some value then only we can store value in variable.

function addTwoNumbers(number1, number2){     // here number1 and number2 are known as parameters.

    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)  // here 3 and 5 are known as arguments

// console.log("Result: ", result); // 7 

function myfunction(username){
    return `${username} just logged in`
}

myfunction("Harshit")  // we have to print the return value 
console.log(myfunction("Harshit")) 

console.log(myfunction()) // undefined just logged in


function myfunction1(username="Sam"){ // Passing default value , if argument not pass in function call , then defeult value is considered 
    if(!username){                     // while else if value is pass in function it can we overwrite.
        console.log("Please enter user name")
        return 
    }     
    return `${username} just logged in`   
}

console.log(myfunction1())  // Sam just logged in
console.log(myfunction1("HJarshit")) // HJarshit just logged in

// when we don'nt know how many parameter a function pass , we use rest operator(...) , ex when we have to calculate total cart price of users

function CalculateCartPrice(...num){
    return num
}

console.log(CalculateCartPrice(200,300,400,1000,4209))  // it print [ 200, 300, 400, 1000, 4209 ]

function CalculateCartPrice1(val1,val2,...num){
    return num
}
console.log(CalculateCartPrice1(200,300,400,1000,4209))  // [ 400, 1000, 4209 ] , here 200 assign to val1 and 300 assign to val2

// object as an argument pass in function
const user = {
    username: "hitesh",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));


