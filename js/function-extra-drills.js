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
    return boolean == true;
}
console.log(isTrue(50));