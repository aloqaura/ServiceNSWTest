// Q1 - Use the array.map function to convert an array of strings into an array of the length of each of those strings

const convertStringToNumber = (string) => string.length;

let string = ["Dog", "Michael", "John", "Latroy", "Joe"];

let numbers = string.map(convertStringToNumber);
console.log(numbers);

// Q2 - Create an array of numbers. Use the array.map function to add 5 to each of those numbers

const add5 = added5 => added5 + 5;

let eachNumAdd5 = numbers.map(add5);
console.log(eachNumAdd5);

// Q3 - Create an array of people with properties firstName and lastName. Use the array.map function to create an array of the full names of each of the people.

let people = [
    {
        firstName: "Joe",
        lastName: "Klein"
    },
    {
        firstName: "Kiren",
        lastName: "Myers"
    },
    {
        firstName: "Doa",
        lastName: "Quit"
    },
    {
        firstName: "Angel",
        lastName: "Quail"
    },
];

const convertPeopleFullName = people => `${people.firstName} ${people.lastName}`;

let peopleWithFullName = people.map(convertPeopleFullName);
console.log(peopleWithFullName);
// Q4 - Create an array of pets with properties name (string), age (number) and owner (object with name and age). Use the array.map function to get an array of the names of all the owners.

let pets = [
    {
        name: "Knox",
        age: 0.6,
        owner: {
            name: "Alex",
            age: 21
        }
    },
    {
        name: "Loyd",
        age: 1,
        owner: {
            name: "Connor",
            age: 45
        }
    },
    {
        name: "Kleid",
        age: 5,
        owner: {
            name: "Joe",
            age: 32
        }
    },
    {
        name: "Rein",
        age: 9,
        owner: {
            name: "Neil",
            age: 10
        }
    }
];

const listOwnerNames = pet => `${pet.owner.name}`;

let foundListOwners = pets.map(listOwnerNames);
console.log(foundListOwners);