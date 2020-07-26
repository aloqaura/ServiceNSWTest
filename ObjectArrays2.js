let schools = [
    {
        name: "Bondi",
        address: "22 - 34, Bondi Land",
        headTeacher: {
            title: "Mr",
            lastName: "Bone"
        }
    },
    {
        name: "Dream Time",
        address: "22 - 34, Dream Time Land",
        headTeacher: {
            title: "Mrs",
            lastName: "Bomber"
        }
    },
    {
        name: "Wentworth",
        address: "22 - 34, Wentworth Land",
        headTeacher: {
            title: "Ms",
            lastName: "Ignis"
        }
    },
];

schools[0].students = [
    {
        firstName: "Johnny",
        lastName: "Deeppland",
        age: 12,
        yearGroup: 7
    },
    {
        firstName: "Lenald",
        lastName: "Boinker",
        age: 12,
        yearGroup: 7
    },
    {
        firstName: "Peewee",
        lastName: "Kold",
        age: 18,
        yearGroup: 12
    },
    {
        firstName: "Joe",
        lastName: "McLayer",
        age: 28,
        yearGroup: 13
    }
];

schools[1].students = [
    {
        firstName: "Manuel",
        lastName: "Haid",
        age: 12,
        yearGroup: 7
    },
    {
        firstName: "Leroy",
        lastName: "Jankins",
        age: 10,
        yearGroup: 10
    },
    {
        firstName: "Faheg",
        lastName: "Pomber",
        age: 13,
        yearGroup: 12
    },
    {
        firstName: "Peter",
        lastName: "Feyer",
        age: 12,
        yearGroup: 7
    }
];

schools[2].students = [
    {
        firstName: "Lmao",
        lastName: "Kek",
        age: 14,
        yearGroup: 13
    },
    {
        firstName: "Kyle",
        lastName: "Joyke",
        age: 13,
        yearGroup: 13
    },
    {
        firstName: "Mclaugh",
        lastName: "Strong",
        age: 17,
        yearGroup: 12
    },
    {
        firstName: "Hylander",
        lastName: "McLayer",
        age: 12,
        yearGroup: 7
    },
    {
        firstName: "Johnny",
        lastName: "Crumps",
        age: 17,
        yearGroup: 13
    }
];

schools[0].teachers = [
    {
        firstName: "Main",
        lastName: "Land",
        subject: "England"
    },
    {
        firstName: "Loyd",
        lastName: "Switch",
        subject: "Math"
    },
    {
        firstName: "Koala",
        lastName: "Kangaroo",
        subject: "Pyschology"
    },
    {
        firstName: "Old",
        lastName: "Lad",
        subject: "History"
    }
];

schools[1].teachers = [
    {
        firstName: "Farland",
        lastName: "Ahoy",
        subject: "Geography"
    },
    {
        firstName: "Foil",
        lastName: "Plans",
        subject: "Math"
    },
    {
        firstName: "Joe",
        lastName: "Spangaroo",
        subject: "English"
    },
    {
        firstName: "Trent",
        lastName: "Trend",
        subject: "History"
    }
];

schools[2].teachers = [
    {
        firstName: "Forgone",
        lastName: "You",
        subject: "England"
    },
    {
        firstName: "Soy",
        lastName: "Coy",
        subject: "Math"
    },
    {
        firstName: "Fay",
        lastName: "May",
        subject: "Pyschology"
    },
    {
        firstName: "Day",
        lastName: "Say",
        subject: "History"
    }
];

// Q1 - Use for..of loop(s) to write out all the students with a yearGroup greater than 9

// for (const school of schools) {
//     for (const student of school.students) {
//         if(student.yearGroup > 9) {
//             console.log(student);
//         }
//     }
// }

// Q2 - Use for..of loop(s) to write out all the teachers that work at a school with 4 students or less

// for (const school of schools) {
//     for (const teacher of school.teachers) {
//         if(school.students.length <= 4) {
//             console.log(teacher);
//         }
//     }
// }

//Q3 - Use for..of loop(s) to write out the full names of all students who have an age of 12 and a yearGroup of 7

for (const school of schools) {
    for (const student of school.students) {
        if(student.age == 12 && student.yearGroup == 7) {
            console.log(student);
        }
    }
}

//Q4 - Use for..of loop(s) and any other method you know to log how many students are in each yearGroup across all schools (assume yearGroup is a whole number from 0 - 12)

for (const school of schools) {
    
}