let pet = {
    name: "Knox",
    age: 1,
}

pet.owners = ["Alex", "Steph"];

for (let i = 0; i < pet.owners.length; i++) {
    // console.log(pet.owners[i]);   
}

let newPet = new Object();
// console.log(newPet);

newPet["name"] = "Joe";
// console.log(newPet);
newPet.age = 5;
// console.log(newPet);
for (const key in newPet) {
    if (newPet.hasOwnProperty(key)) {
        // console.log(newPet[key]);
    }
}

for (const key in newPet) {
    console.log(key); // The for-in loop is accessing the key in the newPet object
        console.log(newPet[key]); // The for-in loop is accessing the value of the key(property) in the newPet object
}