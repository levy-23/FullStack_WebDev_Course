//Function to find area of rectangle
    // function area(length, width) {
    //     return length * width;
    // }

    // var rectanglesAreas = [];
    // rectanglesAreas.push(area(10,20));
    // rectanglesAreas.push(area(14,3));
    // rectanglesAreas.push(area(56,2));

    // console.log(rectanglesAreas);

var bankBalance = 500;
//Bank and arrays

    // function makeTransaction(priceOfSale) {
    //     if(priceOfSale <= bankBalance){
    //         bankBalance -= priceOfSale;
    //         console.log("Purchase successful! Remaining balance: " + bankBalance)
    //     }else{
    //         console.log("Purchase declined")
    //     }
    // }
    // makeTransaction(50);
    // makeTransaction(50.84);
    // makeTransaction(2.99);
    // makeTransaction(300.34);
    // makeTransaction(500.9);

    // var transaction = function(priceOfSale) {
    //     if(priceOfSale <= bankBalance){
    //         bankBalance -= priceOfSale;
    //         console.log("Purchase successful! Remaining balance: " + bankBalance)
    //     }else{
    //         console.log("Purchase declined")
    //     } 
    // }

    // var printCustomerName = function(first,last) {
    //     console.log("First name: " + first + " Last name: " + last);
    // }

    // var applyForCreditCard = function(creditscore) {
    //     //random
    // }

    // var bankFunctions = [];
    // bankFunctions.push(transaction);
    // bankFunctions.push(printCustomerName);
    // bankFunctions.push(applyForCreditCard);

var students = [];

function Student(first, last, age){
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.greeting = function() {
        console.log("Hi, my name is " + this.firstName + " and I am " + this.age + " years old.")
    }
}

students.push(new Student("Jenny", "McFarts", 13));
students.push(new Student("Huburt", "Shits", 8));
students.push(new Student("poop", "man", 18));

var student = students[0];

for(var key in student){
    console.log(student[key]);
}

// var s1 = new Student ("Michael", "Jordan", 56);
// console.log(s1);
// console.log(s1.greeting());

// var student0 = {
//     firstName: "James",
//     lastName: "Lebron",
//     age: 26,
    
// };

// console.log(student0.greeting());

// var student1 = new Object();
// student1.firstName = "Red";
// student1.lastName = "Shark";
// student1.age = 50;

// var student2 = {};
// student2.firstName = "Boob";
// student2.lastName = "man";
// student2.age = 18;


// students.push(student0);
// students.push(student1);
// students.push(student2);

// console.log(student.firstName);
// console.log(student.lastName);
// console.log(student.age);
// console.log(student["firstName"]);

// var students = ["James", "Beneatha", "Qualt", "Walter", "Ruth"];


// for(var index = 0; index < students.length; index++){
//     var student = students[index];
//     console.log(student.greeting());
// }
