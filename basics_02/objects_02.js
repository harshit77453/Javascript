const tinderUser = new Object();

console.log(tinderUser); // {}

const tinderUser_1 = {}

tinderUser_1.id = "123ABC"
tinderUser_1.name = "harshit"
tinderUser_1.isLoggedIn = false

console.log(tinderUser_1);

// Gets the keys and values of object in an array return type- used when we are working with Js project 
console.log(Object.keys(tinderUser_1));                         // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser_1));                       // [ '123ABC', 'harshit', false ]
console.log(Object.entries(tinderUser_1));                      // [ [ 'id', '123ABC' ], [ 'name', 'harshit' ], [ 'isLoggedIn', false ] ]

// when you want to check object has property that you search for -
console.log(tinderUser_1.hasOwnProperty('name'))  // return true



const obj_1 = {1:"a",2:"b"}
const obj_2 = {3:"a",4:"b"}
const obj_3 = {5:"a",6:"b"}

const obj_4 = {obj_1,obj_2,obj_3}
console.log(obj_4) // {
  //  obj_1: { '1': 'a', '2': 'b' },
  //  obj_2: { '3': 'a', '4': 'b' },
  //  obj_3: { '5': 'a', '6': 'b' }
  //}

const obj_5 = Object.assign({},obj_1,obj_2,obj_3)
console.log(obj_5)  // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj_6 = {...obj_1,...obj_2,...obj_3}
console.log(obj_6) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

// values from database come mostly in the form of array-object.

const users = [
  {
    id:"1",
    email:"abc@gmail.com"
  },
  {
    id:"2",
    email:"xyz@gmail.com"
  }
]

// Access values from array-object
console.log(users[1].email)          // xyz@gmail.com

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh"
}

// course.courseInstructor


// Object de-structuring 
const {courseInstructor} = course
// console.log(courseInstructor);

// we can also assign name 
const {courseInstructor: instructor} = course
console.log(instructor);

// API comes mostly in the JSON, early(phle ke time me) API comes in XML format which were very complex.
// Json format , object without name and keys are in sttrings.
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }


// API sometimes comes in the form of array
[
  {},
  {},
  {}
]