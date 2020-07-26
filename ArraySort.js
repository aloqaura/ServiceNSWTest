// Q1 - Create an array of numbers and sort them from largest to smallest

let numbers = [1, 90, 3, 345, 45, 3];

console.log(numbers.sort((num1, num2) => num1 - num2)); // arranges from smallest to largest
console.log(numbers.sort((num2, num1) => num1 - num2)); // arranges from largest to smallest

// Q2 - Create a sort function that will sort the following array of events into chronological order:


let events = [
    {
        name: "Went on holiday",
        month: 3,
        year: 2019
    }, {
        name: "Got first car",
        month: 5,
        year: 2015
    }, {
        name: "Moved out of home",
        month: 2,
        year: 2019
    }
];

console.log(events
    .sort((event1, event2) => event1.month - event2.month)
    .sort((event1, event2) => event1.year - event2.year));
    
// Q3 - Sort the following array in alphabetical order by last name, then by first name
let people = [
    {
        firstName: "Margaret",
        lastName: "Cox"
    }, {
        firstName: "Aaryan",
        lastName: "Bauer"
    }, {
        firstName: "Asma",
        lastName: "Bauer"
    }, {
        firstName: "Jazmin",
        lastName: "Flowers"
    }
];

let sortByLastFirstName = people.sort(person1, person2)