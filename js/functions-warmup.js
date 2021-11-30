/*
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

function flyDay (isCloudy, numberofPlanes) {
    if (!isCloudy && numberofPlanes < 10) {
        console.log("Today's a good day to fly");
    } else {
        console.log("Stay grounded");
    }
}*/

// function addition (x , y) {
//     console.log(x + y);
// }
//
// function subtraction (x , y) {
//     console.log(x - y);
// }
//
// function multiply (x , y) {
//     console.log(x * y);
// }
//
// function divide (x , y) {
//     console.log(x / y);
// }
//
// function remainder (x , y) {
//     console.log(x % y);
// }

// function reverseString (string) {
//     string = string.split("");
//     string = string.reverse();
//     return string.join("");
// }
//
// console.log(reverseString("apples and oranges"));

// function letterGrade (studentGrade) {
//     if (studentGrade >= 90) {
//         return "A";
//     } else if (studentGrade >= 80) {
//         return "B";
//     } else if (studentGrade >= 70) {
//         return "C";
//     } else if (studentGrade >= 60) {
//         return "D";
//     } else {
//         return "F";
//     }
// }
//
// console.log(letterGrade(78));

// let studentGrade = 99   ;
//
// switch(true) {
//     case studentGrade >= 90:
//         console.log("A");
//         break;
//     case studentGrade >= 80:
//         console.log("B");
//         break;
//     case studentGrade >= 70:
//         console.log("C");
//         break;
//     case studentGrade >= 60:
//         console.log("D");
//         break;
//     default:
//         console.log("F");
//         break;
// }
let scoreOne = 300;
let scoreTwo = 250;
let scoreThree = 200;
function scoreAverage (scoreOne, scoreTwo, scoreThree) {
    return (scoreOne + scoreTwo + scoreThree) / 3;
}
//console.log(scoreAverage(300, 250, 200));

function divisibleByThreeOrFive (scoreOne) {
    return (scoreOne % 3 === 0) || (scoreOne % 5 === 0);
}
//console.log(divisibleByThreeOrFive(300));

let bowlingName = "ThEbEsTbOwLiNgPlAcEever"
function lowercaseName (bowlingName) {
    let lowerCase = bowlingName.toLowerCase();
    let nameArray = lowerCase.split("");
    nameArray.splice(3, 0, " ");
    nameArray.splice(8, 0, " ");
    nameArray.splice(16, 0, " ");
    nameArray.splice(22, 0, " ");
    let newName = nameArray.join("");
    return newName;
}
console.log(lowercaseName("ThEbEsTbOwLiNgPlAcEever"));

let score = 100;
let name = "bowling Is Fun";
let isBowlingFun = true;
let players = ["tom", "jerry", "Garfield"];
function varType (variable) {
    return typeof (variable);
}
//console.log(varType(players));

function executeAll () {
    console.log(scoreAverage(scoreOne, scoreTwo, scoreThree));
    console.log(divisibleByThreeOrFive(scoreOne));
    console.log(lowercaseName(bowlingName));
    console.log(varType(players));
}
//executeAll();

function myFunction (firstName, lastName) {
    return firstName + " " + lastName;
}
//console.log(myFunction("Kat", "Rodriguez"));

function thatsNotMyName (name) {
    if (name === "Laura") {
        return "That's me! I'm " + name;
    } else {
        return "That's not my name";
    }
}
//console.log(thatsNotMyName("Laura"));