/*var a = 1;
var b = a++;
var c = ++a;
// what is the value of a, b, and c?
console.log(a);
console.log(b);
console.log(c);

var d = "hello";
var e = false;
d++;
e++;
console.log(d);
console.log(e);

var perplexed; // perplexed is undefined (no value is assigned)
console.log(perplexed + 2);

var price = 2.7;
console.log(price.toFixed(2));

// var price = "2.7";
// console.log(price.toFixed(2));

console.log(isNaN(0));
console.log(isNaN(1));
console.log(isNaN(""));
console.log(isNaN("string"));
console.log(isNaN("0"));
console.log(isNaN("1"));
console.log(isNaN("3.145"));
console.log(isNaN(Number.MAX_VALUE));
console.log(isNaN(Infinity));
console.log(isNaN("true"));
console.log(isNaN(true));
console.log(isNaN("false"));
console.log(isNaN(false));
// to illustrate why the isNaN() function is needed:
console.log(NaN == NaN);

console.log(!true);
console.log(!false);
console.log(!!true);
console.log(!!false);
console.log(!!0);
console.log(!!-0);
console.log(!!1);
console.log(!!-1);
console.log(!!0.1);
console.log(!!"hello");
console.log(!!"");
console.log(!!'');
console.log(!!"false");
console.log(!!"0");

var sample = "Hello,
Codeup";
console.log(sample.toLowerCase());
sample += " Students";
sample = sample.replace("Students" , "Class");
console.log(sample);
console.log(sample.indexOf("C"));
console.log(sample.substring(7 , 13))*/;

let littleMermaid = 3;
let brotherBear = 5;
let Hunkules = 1;
console.log((littleMermaid * 3) + (brotherBear * 3) + (Hunkules * 3));

let payGoogle = 400;
let payAmazon = 380;
let payFacebook = 350;
console.log((payGoogle * 6) + (payFacebook * 10) + (payAmazon * 4));

let isNotFull = true;
let scheduleClear = true;
if (isNotFull && scheduleClear) {
    console.log("Student can enroll");
} else {
    console.log("Student cannot enroll");
}

let itemsBought = 2;
let offerValid = true;
let premiumMember = false;
if ((itemsBought > 2 || premiumMember) && offerValid) {
    console.log("Offer applied");
} else {
    console.log("Offer not applied");
}

let username = "codeup";
let password = "notastrongpassword";
console.log(password.length >= 5);
console.log(!password.includes(username));
console.log(username.length <= 20);
console.log(username === username.trim()) && (password === password.trim());