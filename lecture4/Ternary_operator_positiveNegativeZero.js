let number = Number(prompt("Enter your number : "))

if (isNaN(number))
{
    console.log("Wrong input ")
}
else
{
   console.log(`Number ${number} is ${number > 0 ? "positive" : number < 0 ? "negative" : "zero"} `) 
}