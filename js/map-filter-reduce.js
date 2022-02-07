const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

// let threeLanguages = users.filter(function (user) {
//     return user.languages.length === 3;
// })
// try arrow function
let threeLanguages = users.filter(user => user.languages.length >= 3)
// console.log(threeLanguages);

let userEmail = users.map(user => user.email)
// console.log(userEmail)

let totalYears = users.reduce((accumulation, user) => {
    return accumulation + user.yearsOfExperience;
}, 0)
// console.log(totalYears/users.length)

// let longestEmail = users.reduce((prevValue, user) => {
//     if (typeof prevValue === 'undefined') {
//         return user.email
//     } else if (prevValue.length < user.email.length) {
//         return prevValue + user.email
//     }
// }, "")
// console.log(longestEmail) idk
let longestEmail = users.reduce((longest, user) => {
    if (user.email.length > longest.length) {
        return user.email
    } else {
        return longest
    }
}, "")
// console.log(longestEmail)

let userNames = users.reduce((accumulation, user, index) => {
    if (index === users.length -1) {
        return accumulation + user.name + ".";
    } else {
        return accumulation + user.name + ", ";
    }
}, "Your instructors are: ")
console.log(userNames)

let allLanguages = users.reduce((previousValue, user) => {
    let totalLanguages = [...previousValue, ...user.languages] // returns array of all listed languages including duplicates
    return totalLanguages.reduce((previousValue, currentValue) => {
        if (previousValue.indexOf(currentValue) === -1) {
            previousValue.push(currentValue)
        }
        return previousValue
    }, [])
}, [])
console.log(allLanguages)
// want to go through each object in the array and go through the language arrays and just return one of each kind
// should return clojure, javascript, java, scala, php, bash, sql, html, css