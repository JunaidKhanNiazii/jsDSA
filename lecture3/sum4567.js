console.log("sum of number string")

let num = "4567";
let num2 = 4567;
let total = 0;


length = num.length;
console.log(length);
// method 1 : using for loop 
for (let i = 0; i < length; i++) {
    total += Number(num[i]);
}

// method 2 : using for of loop 
console.log(`Sum of digits in number ${num} is : ${total}`);
total = 0;
for (let i = 0; i < length; i++) {
    let rem = num2 % 10;
    total += rem;
    num2 = Math.floor(num2 / 10);
}

console.log(`Sum of digits in number ${num2} is : ${total}`);