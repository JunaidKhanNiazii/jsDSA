console.log("Lecture 4  valid vote problem script loaded");

let age = Number(prompt("Enter your age:"));
console.log(
    `The age entered is ${age}`
)
if (isNaN(age)){
    console.log("Invalid Input")
}
if (age >= 18) 
{
    console.log("You are eligible to vote.")
}
else 
{
    console.log("You are not eligible to vote.")
}