const greeting = (name = "Alex") => console.log(`Hello ${name}`);

greeting();

//

const returnGreeting = (name = "Luke") => `Hello ${name}`;

console.log(returnGreeting());

//

const greatestNumber = (num1, num2 = 100) => {
    if (num1 > num2) {
        console.log(num1);
    } else {
        console.log(num2);
    }
}

greatestNumber(89);

//

const smallestNumber = (num1 = 5, num2 = 5) => {
    if (num1 < num2) {
        return num1;
    } else {
        return num2;
    }
}

console.log(smallestNumber(2));

const myNumber = (num1, num2) => num1 < num2 ? num1 : num2;

console.log(myNumber(19, 12))