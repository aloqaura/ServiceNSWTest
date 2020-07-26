// let numbers = [1, 2, 3, 4, 5];

// numbers.push(6);
// numbers.unshift(0);
// console.log(numbers);

// numbers[6] = 8;
// console.log(numbers);

// for (let i = 0; i < numbers.length; i++) {
//     if(numbers.length == 5) {
//         break;
//     }
//     numbers.shift(numbers[i]);
// }

// console.log(numbers);

// let name = ["Alex", "Joey", "Ko"];

// for (let i = 0; i < name.length; i++) {
//     console.log(name[i]);
// }

// for (let i = 0; i < numbers.length; i++) {
//     const element = numbers[i];
//     console.log(element * 2);
// }

// for (const element of name) {
//     console.log(element);
// }

// for (const element of numbers) {
//     console.log(element * 2);
// }

let names = new Array(); 
console.log(names);

//

names.push("Aloz", "Chloe", "Dana", "David");
console.log(names);

//

for (let i = names.length - 1; i >= 0; i--) {
    console.log(names[i]);
}

//

let number = [28, 2, 6, 70];

//

number.push(5);
number.unshift(0);
console.log(number);

//

// for (let i = 0; i < number.length; i++) {
//     if(i % 2 == 0)
//     console.log(number[i]);
// }

//

// for (const element of number) {
//     if(element % 2 == !0) {
//         continue;
//     }
//     console.log(element);
// }

//

myArray = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if(element <= 10) {
        continue;
    }
    myArray.push(element);   
}
console.log(myArray);

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}