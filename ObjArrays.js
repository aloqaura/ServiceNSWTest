// let people = [
//     {
//         name: "Alex",
//         age:21,
//         pet: {
//             name: "Knox",
//             age: 1
//         }
//     }, {
//         name:"Joe",
//         age: 34,
//         pet: {
//             name: "Mouse",
//             age: 4
//         }
//     }
// ];

// console.log(`${people[1].name} is ${people[1].age} years old.`); // people.key is accessing w/e property at w/e index used
// console.log(`${people[1].name} owns a pet named ${people[1].pet.name} of ${people[1].pet.age} years old.`); // people.key.key is accessing w/e property at w/e index used

// for (const person of people) {
//     console.log(`${person.name} is ${person.age} years old.`); // person.key is accessing w/e property in each of the objs of the array
//     console.log(`${person.name} owns a pet named ${person.pet.name} of ${person.pet.age} years old.`); // person.key.key is accessing w/e property in each of the objects of the array
// }

// Exercises: 


//Q1 - Create an array of objects called libraries. Each should have the following properties: name which should be a string, address which should be a string and headLibrarian which should be an 
//object with properties name and age.

let libraries = [
    {
        name: "Wynyard",
        address: "WA",
        headLibrarian: {
            name: "Alex",
            age: 21
        }
    }, {
        name: "Haymarket",
        address: "NSW",
        headLibrarian: {
            name: "Joe",
            age: 34
        }
    }, {
        name: "Gosford",
        address: "SA",
        headLibrarian: {
            name: "Chloe",
            age: 326
        }
    }
];

//Q2 - For each Library, add a property called books which sholuld be an array of objects. Each book should have the following properties: title, author, yearOfPublication
libraries[0].books = [
    {
        title: "War and Peace",
        author: "Leo Tolsoy",
        yearOfPublication: 1992
    }, {
        title: "Song of Solomon",
        author: "Toni Morrison",
        yearOfPublication: 1990
    }, {
        title: "Ulysses",
        author: "James Joyce",
        yearOfPublication: 1880
    }
];

// console.log(libraries[0].books);

libraries[1].books = [
    {
        title: "The Shadow of the Wind",
        author: "Carlos Ruiz Zafon",
        yearOfPublication: 1999
    }, {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        yearOfPublication: 2090
    }, {
        title: "The Satanic Verses",
        author: "Salmon Rushdie",
        yearOfPublication: 1003
    }
];

// console.log(libraries[1].books);

libraries[2].books = [
    {
        title: "Don Quixote",
        author: "Miguel de Cervantes",
        yearOfPublication: 2022
    }, {
        title: "The Golden Compass",
        author: "Philip Pullman",
        yearOfPublication: 2090,
    }, {
        title: "Catch-22",
        author: "Joseph Heller",
        yearOfPublication: 2037
    }
];

// console.log(libraries[2].books);

//Q3 - Use for..of and/or for..in loops to write the book titles across all the libraries that have been published in the last 20 years.

// for (const library of libraries) {
//     for (const book of library.books) {
//         if (book.yearOfPublication >= 2000) {
//             console.log(book.title);
//         }
//     }
// }

// Q4 - Use for..of and/or for..in loops to write all of the authors of books that appear in a library with a librarian that is under 30 years old.

// for (const library of libraries) {
//     if (library.headLibrarian.age < 30) {
//         for (const book of library.books) {
//             console.log(book.author);
//         }
//     }
// }

// Q5 - Use for..of and/or for loops to write all the names of libraries that have at least 3 books published before 2000.

for (const library of libraries) {
    let i = 0;
    for (const book of library.books) {
        if(book.yearOfPublication >= 2000) {
            i++;
            if(i >= 3) {
                console.log(library.name);
            }
        }
    }
}