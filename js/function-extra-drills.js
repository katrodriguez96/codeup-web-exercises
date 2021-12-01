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
    return string !== string.toUpperCase();
}
//console.log(hasLowerCase("hazel"));

function isSpace (letter) {
    return letter === " ";
}
//console.log(isSpace("z"));

function isZero (number) {
    return number === 0;
}
//console.log(isZero(0));

function notZero (input) {
    return input !== 0;
}
//console.log(notZero(1));

function lowerCase (string) {
    return string.toLowerCase();
}
//console.log(lowerCase("HELLO"));

function double (n) {
    return n * 2;
}

function triple (n) {
    return n * 3;
}

function quadruple (n) {
    return n * 4;
}

function half (n) {
    return n / 2;
}
//console.log(half(4));

function subtract (a, b) {
    return a - b;
}

function mulitply (a, b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function remainder (a, b) {
    return a % b;
}
// dont really understand the one asking to make modulo(a, b). its the same thing as remainder?
function cube (n) {
    return n * n * n;
}
//console.log(cube(3));

function squareRoot (n) {
    return Math.sqrt(n);
}
//console.log(squareRoot(8));

function cubeRoot (n) {
    return Math.cbrt(n);
}

function invertSign (number) {
    if (number >= 1) {
        return -Math.abs(number);
    } else if (number <= -1) {
        return Math.abs(number);
    } else {
        return false;
    }
}
//console.log(invertSign("string"));

function degreesToRadians (number) {
    return number * (Math.PI / 180);
}
//console.log(degreesToRadians(45));

function radiansToDegrees (number) {
    return number * (180 / Math.PI);
}
//console.log(radiansToDegrees(0.7853981633974483));

function isBlank (input) {

}
// ???