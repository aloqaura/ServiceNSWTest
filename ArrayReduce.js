// Q1 - Create an array of numbers and use the array.reduce method to find the smallest number in the array

// console.log(Math.min(5, 5, 3, 8, 5, 7, 5)); // Math.min

let numbers = [9, 5, 3, 8, 5, 7, 5];

const foundMin = (currentMin, currVal) => {
    if (currentMin < currVal) {
        return currentMin
    } else {
        return currVal
    }
}

let minNum = numbers.reduce(foundMin);
// console.log(minNum)

// Q2 - Create an array of strings and use the array.reduce method to find the length of the longest string in the array

let string = ["Dog", "Pigeon", "Monkey", "Kind", "Donkey Kong", "Mike", "I"];

const largest = (acc, curr) => {
    if(acc > curr.length) {
        return acc
    } else {
        return curr.length
    }
}

// console.log(string.reduce(largest, 0));

// Q3 - Create an array of objects called bankers. Each should have a name (string) and netWorth (number). Use the array.reduce method to find the total netWorth of all the bankers. 
// Then use that number to calculate the average netWorth of all the bankers.

let bankers = [
    {
        name: "Bobby Klein",
        netWorth: 42
    }, 
    {
        name: "The Single",
        netWorth: 49
    }, 
    {
        name: "One Dollar Mella",
        netWorth: 24
    }, 
    {
        name: "Servant B",
        netWorth: 90
    }, 
];

const max = (acc, curr) => acc + curr.netWorth
let sum = bankers.reduce(max, 0);
console.log(sum/bankers.length);