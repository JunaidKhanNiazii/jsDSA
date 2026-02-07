console.log("Swaping Variable Script Loaded");

// method 1: Using a temporary variable
let a = 5;
let b = 10;

console.log(`Before Swapping: a = ${a}, b = ${b}`);

let temp = a;

a = b;
b = temp;

console.log(`After swapping: a = ${a}, b = ${b}`);

// Method 2:

let x = 12 ;
let y = 20 ;

console.log(`Before Swapping: x = ${x}, y = ${y}`);

x = x + y;
y = x - y;
x = x - y;

console.log(`After Swapping: x = ${x}, y = ${y}`);


// Method 3


let value1 = 50;
let vlue2 = 30;
console.log(`Before Swapping: value1 = ${value1}, vlue2 = ${vlue2}`);    
[value1, vlue2] = [vlue2, value1];

console.log(`After Swapping using destructuring : value1 = ${value1}, vlue2 = ${vlue2}`);
