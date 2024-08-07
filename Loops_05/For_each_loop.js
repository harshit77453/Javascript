// Mostly used with the array

const coding = ["Java","Python","Js","C++"]

// forEach Loop
// coding.forEach((item) => {
//     console.log(item)
// });

coding.forEach(function nameOfFun(item) {
    console.log(item)
});

function printMe(item){
    console.log(item)
}

coding.forEach(printMe)