let prompt = require('prompt-sync')()

let number = Number(prompt("Enter a number "))

if (isNaN(number))
{
    console.log("Invalid input");
}

else 
{
    for (let i = 1; i <= number; i++)
    {
        process.stdout.write("* ")
    }
    process.stdout.write("\n");
}