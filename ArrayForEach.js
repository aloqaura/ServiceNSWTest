// Declare an array of objects with properties name and age. Use an array.forEach loop to iterate over each object and print the name and age of the object to the console. Do the same using a for and for..of loop

let people = [
    {
        name: "Alex",
        age: 21
    },
    {
        name: "Joe",
        age: 33
    },
    {
        name: "Connor",
        age: 23
    }
];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

for (const person of people) {
    console.log(person);
}

for (const key in people) {
    console.log(people[key]);
}

people.forEach(element => console.log(element));