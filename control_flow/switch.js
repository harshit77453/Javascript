// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const month1 = 3

switch (month1) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// Note - very Important ,asked in interview
// suppose if we remove any break from case block ,then after that every case is executed.
// example - 
const month2 = 3

switch (month2) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        // break;
    case 4:
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}                                               // o/P - march
                                                //       april


// strings value switch case
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}