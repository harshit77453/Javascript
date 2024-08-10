// Mostly used with the array

const coding = ["Java","Python","Js","C++"]

// forEach Loop
// coding.forEach((item) => {
//     console.log(item)
// });

coding.forEach(function nameOfFun(item) {
    console.log(item)
});


// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe)

// coding.forEach( (item,index,arr) => {         // Java 0 [ 'Java', 'Python', 'Js', 'C++' ]
//     console.log(item , index , arr)           // Python 1 [ 'Java', 'Python', 'Js', 'C++' ]
//                                               // Js 2 [ 'Java', 'Python', 'Js', 'C++' ]
//                                               // C++ 3 [ 'Java', 'Python', 'Js', 'C++' ]
// })


const myCoding = [
    {
        LanguageName : "Javascript",
        LanguageFileName : "js"
    },
    {
        LanguageName : "Python",
        LanguageFileName : "Py"
    },
    {
        LanguageName : "C++",
        LanguageFileName : "C++"
    }
]

myCoding.forEach((item) => {
    console.log(item.LanguageName)
    console.log(item.LanguageFileName)
})




