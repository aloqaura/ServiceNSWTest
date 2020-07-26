// const names = ["kleid", "Suigetsu", "May", "Florence", "Lidia"];

// const numbers = [24, 54, 2, 3453, 3, 21];

// Q1 - Write some code to find the first name in the names array that starts with an "F"

// let fFound = names.find(element => element[0] == "F");
// console.log(fFound)

// Q2 - Write some code to find the first number in the numbers array that is smaller than 10

// let lessThan10 = numbers.find(element => element < 10);
// console.log(lessThan10);

// Q3 - Write some code to find all the names that are 4 or less characters long

// let fName5 = names.find(name => name.length == 5);
// console.log(fName5);

// Q4 - Write some code to find all the numbers in the numbers array that are divisible by 3

// let Q4 = numbers.filter(num => num % 3 == 0);
// console.log(Q4);

//

let people = [
    {
        firstName: "Joe",
        lastName: "King",
        age: 91
    },
    {
        firstName: "Loyd",
        lastName: "Meha",
        age: 28
    },
    {
        firstName: "Fly",
        lastName: "Gah",
        age: 12
    },
    {
        firstName: "Alex",
        lastName: "Burgess",
        age: 21
    },
    {
        firstName: "Depp",
        lastName: "Johnnyyy",
        age: 17
    }
];

// Q5 - Write some code to find the first person that is under 18 years old and log their full name;

function personUnder18(person) {
    if (person.age < 18) {
        return true;
    }
}

let Q5 = people.find(person => person.age < 18);
// console.log(`${Q5.firstName} ${Q5.lastName}`);

// Q6 - Write some code to get an array of all the people that have more than 10 characters in their first and last names combined (eg. Luke Parker has exactly 10 characters and should not be included)
function personLAFG10(person) {
    if (person.lastName.length + person.firstName.length > 10) {
        return true;
    }
}

let Q6 = people.filter(person => person.firstName.length + person.lastName.length > 10);
// console.log(Q6);

// Q7 - Write some code to find all the people that have their last name longer than their first name.
function LGTF(person) {
    if (person.lastName.length > person.firstName.length) {
        return true;
    }
}

// console.log(people.filter(person => person.lastName.length > person.firstName.length));

let ans = people.filter(person => person.lastName.length > person.firstName.length);
// console.log(ans);

//

let numbers = [1, 3, 5, 2, 6, 8, 20, 19];

let strings = ["Cow", "Sow", "Muel", "Split", "Dekar", "Iamine"]

// Q1 - Create an array of numbers. Use array extension methods to find whether all the elements in the array have a value that is not divisible by 5

let noDivide5 = numbers.every(number => number % 5 == 0);
// console.log(noDivide5);

// Q2 - Create an array of strings. Use array extension methods to find whether any of the elements begin with a vowel.

let includesVowel = strings.some(string => string[0] == "i".toLowerCase || "e".toLowerCase || "o".toLowerCase || "u".toLowerCase || "a".toLowerCase);
// console.log(includesVowel)

// let includesVowel = strings.some(string => ["a", "e", "i", "o", "u"].includes(name[0].toLowerCase())); 

// Q3 - Create an array of pets (name, age, owner) and use array extension methods to find whether any of the pets are owned by Alex.

let pets = [
    {
        name: "Knox",
        age: 1/2,
        owner: "Alex"
    },
    {
        name: "Locky",
        age: 12,
        owner: "Joe"
    }, 
    {
        name: "Harry",
        age: 8,
        owner: "Alex"
    }
];

let qOwnedByAlex = pets.some(pet => pet.owner == "Alex");
// console.log(qOwnedByAlex);

// Q4 - Jimmy is scared of the letter Q, write some code that takes in an array of pet objects (name, age, owner) and tells Jimmy's parents if the array contains any pets that have a name or owner with the letter Q. 
// You must use a for..in loop for this.

const foundQ = pet => {
    for (const key in pet) {
        if (pet.hasOwnProperty(key)) {
            const element = pet[key]
            if(element.includes("g".toLocaleLowerCase)) {
                return true
            }
        }
    }
}

pets.some(foundQ);

//

