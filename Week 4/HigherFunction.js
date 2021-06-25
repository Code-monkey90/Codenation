// let whichGreeting = (timeOfDay) => {
//     console.log("Good ${timeOfDay}")
// }

// let greet = (time, fn) => {
//     if(time<12) {
//         fn("Morning")   
//     } else if (time > 12 && time < 18){
//         fn("Afternoon")
//     } else {
//         fn("Evening")
//     }
// }    


// greet(14, whichGreeting)

// let myFunction = () => {
//     return () => {
//         console.log("hello")
//     }
// }

// console.log(myFunction())


let multiply = (num1 => {

    return (num2) => {
        return num1 * num2

    }
})

let myReturnedFunction = multiply(2)
myReturnedFunction(4)
