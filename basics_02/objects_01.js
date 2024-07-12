// using constructor - one of the way to declare ojects which are singleton.

// const object_1 = Object.create


// object literals - one of the way to declare objects in Js. When we create objects using literals, object is not singleton

const user_object = {
    name:"Harshit",
    age:20,
    city:"Dhampur",
    hobies:["A","B",3],
    isLoggedin:false
}

console.log(user_object)

// Access element of objects
console.log(user_object.name) // this method result in error when key pass as string, ex- object_1 = {"name":"Harshit"}. 
console.log(user_object["name"])

// Update values of the objects 
user_object.email = "0211csml014@niet.co.in"
console.log(user_object)
Object.freeze(user_object) // freeze() method cause not to update any value of object.
user_object.email = "harshit.courses@gmail.com" 
console.log(user_object) // email doesn't update 


// Using Symbol data type as a key of the objects - 

const mySym = Symbol("key_1")
 
const object_2 = {
    name:"Harshit",
    mySym : "key1",
    email:"harshitchauhan286@gmail.com"
}
console.log(object_2.mySym)
console.log(typeof object_2.mySym) // strings

// the above code is working but it'is not correct way using symbol inside objects and access their value

// correct way 
const object_3 = {
    name:"Harshit",
    [mySym] : "key1",
    email:"abc@gmail.com"
}
console.log(object_3[mySym])
console.log(object_3) // O/p - { name: 'Harshit', email: 'abc@gmail.com', [Symbol(key_1)]: 'key1' }


// In Js, function are treated as variable.

object_3.greeting = function(){
    console.log("Hello my name is")
}

object_3.greetingTwo = function(){
    console.log(`Hello my name is {this.name}`)
}




