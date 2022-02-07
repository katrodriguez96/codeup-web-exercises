const fruits = ["cantaloupe", "orange", "date", "elderberry", "ugli fruit", "pineapple"];

const customers = [
    {
        name: "Fred",
        age: 58,
        occupation: "Police Officer",
        noOfPurchases: 4
    },
    {
        name: "Samantha",
        age: 54,
        occupation: "Teacher",
        noOfPurchases: 18
    },
    {
        name: "Charles",
        age: 38,
        occupation: "Librarian",
        noOfPurchases: 9
    }
];

const pets = [
    {
        name: 'Bud',
        age: 2,
        breed: 'Pug'
    },
    {
        name: 'Gabby',
        age: 10,
        breed: 'Retriever'
    },
    {
        name: 'Fred',
        age: 1,
        breed: 'Lab'
    },
    {
        name: 'Bowser',
        age: 2,
        breed: 'Pug'
    }
];

const family = [
    {
        name: "Pam",
        gender: "female",
        age: 29,
    },
    {
        name: "Amelie",
        gender: "female",
        age: 10,
    },
    {
        name: "Justin",
        gender: "male",
        age: 32,
    },
];

//TODO: Create an array of the first letters of each fruit
let firstLetter = fruits.reduce((basket, fruit) => {
    let splitFruit = fruit.split("")
    return [...basket, splitFruit[0]]
}, [])
// console.log(firstLetter)

//TODO: Create array of user objects based on the customers array of objects (each user object should just have name and age properties)
let users =  customers.reduce((nameAge, customer) => {
    return [...nameAge, {
        name: customer.name,
        age: customer.age
    }]
}, [])
// console.log(users)

//TODO: Create an array of civil servant customers (teachers and police officers) containing the same properties as the objects on the customers objects
let civilServants = customers.reduce((teachersPolice, customer) => {
    if (customer.occupation === "Teacher" || "Police Officer") {
        return [...teachersPolice, customer]
    }
}, [])
console.log(civilServants)