// Erstwhile, the legislature determined that being at the bar is not necessary in order to be served, but all the
// remaining conditions are still valid
// Change the expression assigned to cashOnHand to make isAtBar optional  while still requiring the remaining values
// to be true

let isAtBar = false;
let bac = .00;
let age = 22;
let cashOnHand = 5.99;


let canHaveADrink = (bac < .08 && age >= 21 && cashOnHand >= 5.00) // true && false && true && true --> false

if (canHaveADrink && isAtBar) { // true or false
    console.log("Have a brewski my dude!");
} else if (canHaveADrink && !isAtBar) { // it was not true
    console.log("To go beer for u");
} else {
    console.log("No brew for u");
}