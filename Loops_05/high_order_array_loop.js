// for of
const arr = [1,2,3,4,5]
for (const nums of arr){
    console.log(nums)
}


// Map - used data in the form of key-value pair, store duplicates only once and maintain order of insert.
const map = new Map()
map.set("In","India")
map.set("USA","United States of America")
map.set("Fr","France")
for (const key of map) {
    console.log(key)
}

for (const [key1,value] of map) {
    console.log(key1+":-"+value)
}

// Output -In:-India
//         USA:-United States of America
//         Fr:-France

// forof loop Not work in object.
const obj = {
    "1":"India",
    "2":"USA",
    "3":"France"
} 
for (const [key,value] of obj) {
    console.log(key,value)

// give Error - TypeError: obj is not iterable
    
}