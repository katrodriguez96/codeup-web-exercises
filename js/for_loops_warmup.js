// Make a program that filters through this array: ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"] and returns a new array that
// contains only those whose name have only 4 letters in them.

let oldArray = ["Ryan", "Kieran", "Jason", "Mary", "Jo", "Jake"];
console.log(oldArray)

for (let i = oldArray.length - 1; i >= 0; i--) {
    let nameArray = oldArray[i].split("");
    console.log(nameArray);
    console.log("How many letters: " + nameArray.length);
    if (nameArray.length !== 4) {
        oldArray.splice(i, 1);
        console.log(oldArray);
    }
    else {
        console.log(oldArray);
    }
}