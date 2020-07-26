let pets = [
    {
        name: "Knox",
        age: 1,
        species: "Cat",
        id: "c1b86496-6ba9-46e2-85d3-df6fcd7c197b",
        ownerId: "fdc293f2-35ac-4ace-8cf4-cdc0e1cd5f4b"
    },
    {
        name: "Joe",
        age: 5,
        species: "Dog",
        id: "2084ef96-f184-4458-93ab-f67ea1b245fb",
        ownerId: "fdc293f2-35ac-4ace-8cf4-cdc0e1cd5f4b"
    },
    {
        name: "Bino",
        age: 3,
        species: "Cat",
        id: "57776c6d-3e98-42b8-a664-534cb8ced774",
        ownerId: "fdc293f2-35ac-4ace-8cf4-cdc0e1cd5f4b"
    },
    {
        name: "Lucky",
        age: 3,
        species: "Monkey",
        id: "7a4a290a-f41c-4892-bdc7-118eac1be039",
        ownerId: "95ac50c8-7d7a-4fa4-bce3-be15e6cee8ec"
    },
    {
        name: "Fareem",
        age: 1,
        species: "Dog",
        id: "02159eb3-3381-4c19-952f-75ec44c0f596",
        ownerId: "95ac50c8-7d7a-4fa4-bce3-be15e6cee8ec"
    },
    {
        name: "Oolay",
        age: 6,
        species: "Rhino",
        id: "7aab5d07-6a27-46dd-a3cf-8fb071aca2e3",
        ownerId: "fdc293f2-35ac-4ace-8cf4-cdc0e1cd5f4b"
    }
];

let owners = [
    {
        firstName: "Alex",
        lastName: "Burgess",
        id: "fdc293f2-35ac-4ace-8cf4-cdc0e1cd5f4b"
    },
    {
        firstName: "Tony",
        lastName: "Robertson",
        id: "95ac50c8-7d7a-4fa4-bce3-be15e6cee8ec"
    }
];

// Q1 - Write a function that returns a pet given its id

const getPetFromId = id => pets.find(pet => pet.id == id)
console.log(getPetFromId("7aab5d07-6a27-46dd-a3cf-8fb071aca2e3"));

// Q2 - Write a function that returns an owner given its id

const getOwnerFromId = id => owners.find(owner => owner.id == id);
// console.log(getOwnerFromId("95ac50c8-7d7a-4fa4-bce3-be15e6cee8ec"));

// Q3 - Write a function that returns all the pets for an owner

const allOwnersPets = ownerId => pets.filter(pet => pet.ownerId == ownerId);

// function allOwnersPets(ownerId) {
//     function matchOwnerAndPetId(pet) {
//         if(pet.ownerId == ownerId) {
//             return true;
//         }
//     }    
//     return pets.filter(matchOwnerAndPetId);
// }
// console.log(allOwnersPets("95ac50c8-7d7a-4fa4-bce3-be15e6cee8ec"));

// Q4 - Write a function that returns the number of pets for each owner: return array should be an object with property ownerId and numberOfPets

const returnPetsEachOwner = () => owners.map(owner => ({ownerId: owner.id, numberOfPets: allOwnersPets(owner.id).length}));
console.log(returnPetsEachOwner("95ac50c8-7d7a-4fa4-bce3-be15e6cee8ec"));

// Q5 - Write a function that returns all the names of the pets in order of their owner's last name

// const returnAllNamesAndPetsInOrderOfOwnersLastNames = 