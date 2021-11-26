function isOdd (number) {
    return number % 2 === 1;
}
// console.log(isOdd(2));

function isEven (number) {
    return number % 2 === 0;
}
// console.log(isEven(3));

function identity (input) {
    return input;
}
//console.log(identity(1));

function isFive (input) {
    return input === 5;
}
//console.log(isFive(4));

function addFive (input) {
    return input + 5;
}
//console.log(addFive(1));

function isMultipleOfFive (input) {
    return input % 5 === 0;
}
//console.log(isMultipleOfFive(21));

function isThree (input) {
    return input === 3;
}
//console.log(isThree(4));

function isMultipleOfThree (input) {
    return input % 3 === 0;
}
//console.log(isMultipleOfThree(22));

function isMultipleOfThreeAndFive (input) {
    return (input % 3 === 0) && (input % 5 === 0);
}
//console.log(isMultipleOfThreeAndFive(21));

function isMultipleOf (target, n) {
    return target % n === 0;
}
//console.log(isMultipleOf(9, 3));

function isTrue (boolean) {
    return boolean === true;
}
// console.log(isTrue(1));

function isFalse (boolean) {
    return boolean === false;
}
//console.log(isFalse(true));

function isTruthy (boolean) {
    return !!boolean;
}
//console.log(isTruthy(1));

function isFalsy (boolean) {
    return !boolean;
}
//console.log(isFalsy(false));

function isVowel (letter) {
    letter = letter.toLowerCase()
    return letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u";
}
//console.log(isVowel("O"));

function isConsonant (letter) {
    return !isVowel(letter);
}
//console.log(isConsonant("z"));

function isCapital (letter) {
    return letter === letter.toUpperCase();
}
//console.log(isCapital("C"));

function isLowerCase (letter) {
    return letter === letter.toLowerCase();
}
//console.log(isLowerCase("B"));

function hasLowerCase (string) {
    return !string.search("".toLowerCase());
}
// having trouble with this one
console.log(hasLowerCase("HAZEL"));