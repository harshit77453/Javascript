// Two types of memory in Js

// 1- Stack - All Primitive types uses Stack memory
// 2- Heap - All Non-Primitive types uses Heap Memory.

// example - how stack memory store variable (call by value) , in this copy of variable is created if changes made in variable.

let variable = "Harshit chauhan";

let another_variable = variable;
another_variable = "Nikita Pandey";

console.log(another_variable);  // Nikita Pandey
console.log(variable); // Harshit chauhan

//example - How variable stored in Heap (call by reference), in this changes made in the original value.

let userone = {
    email: "abc@gmail.com",
    name: "Harshit"
}

let usertwo = userone;

usertwo.email = "harshitchauhan286@gmail.com";

console.log(userone.email); // harshitchauhan286@gmail.com
console.log(usertwo.email); // harshitchauhan286@gmail.com


