let badNumber = 0;
do {
    badNumber = Number(prompt("Please enter an odd number anywhere from 1 to 50."));
    if (badNumber < 1 || badNumber > 50) {
        alert("Number out of bounds. Please try again.");
    } else if (badNumber % 2 === 0) {
        alert("That is not an odd number. Please try again.");
    } else if (isNaN(badNumber)) {
        alert("That is not a number. Please try again.");
    } else {
        break;
    }
} while (true);

console.log("Number to skip is: " + badNumber);

for (let i = 1; i <= 50; i+=2) {
    if (i === badNumber) {
        console.log("Yikes! Skipping number: " + badNumber);
        continue;
    }
    console.log("Here is an odd number: " + i);
}