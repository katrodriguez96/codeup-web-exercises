// 0 available spots
// 20 total spots
// loop until parking spot available
// iterating through the loop
// there are x number of spots available

// let timePassed = 0;
// let availableSpots = 0;
//
// while (availableSpots === 0) {
//     if (availableSpots === 0) {
//         console.log("No spots available after " + timePassed + " minutes of searching.");
//     } else {
//         console.log("Finally found an empty spot after " + timePassed + " minutes of searching.")
//     }
//     timePassed++;
//     if (timePassed === 5) {
//         let availableSpots = 1;
//     }
// } infinite loop orz

// loop through numbers 0 - 50 by 2s

// let i = 0
//
// while (i < 10) {
//     console.log("i = ", i);
//     i++;
// }
//
// do {
//     console.log("i = ", i);
//     i++;
// } while (i < 10);

// TODO: using prompt() and alert(), write a loop that will continue to ask for the correct password until the
// correct password is given.

let password = "password";
let input = "notpassword"

while (input !== password) {
    let input = prompt("Please enter your password:");
    if (input === password) {
        alert("That's correct!")
        break;
    } else {
        alert("That is incorrect. Please try again.");
    }
}