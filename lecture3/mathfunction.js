// Problem 1:: Calulate Area and parameter of the reactangle.

// Area = length * breadth 
// Perimeter = 2 * (length + breadth)

// solution 1:
// let length = Number(prompt("Enter length of rectangle: "));
// let breadth = Number(prompt("Enter breadth of rectangle: "));

// let area = length * breadth;
// let Perimeter = 2 * (length + breadth);

// console.log("Area of rectangle is: " + area);
// console.log("Perimeter of rectangle is: " + Perimeter);


// Problem 2:: Generate otp of 4 digit number 

// let number = Math.random() * 10000 + 1000;
// console.log(Math.floor(number));


// Problem 3:: area of triangle using heron's formula

let a = 5;
let b = 6;
let c = 3;

let s = (a + b + c) / 2;

let area = Math.sqrt(s* (s-a) * (s-b) * (s-c));

console.log("Area of triangle is: " + area.toFixed(2));