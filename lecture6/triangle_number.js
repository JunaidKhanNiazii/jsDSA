let prompt = require('prompt-sync')()

let number = Number(prompt("Enter a number "))

if (isNaN(number))
{
    console.log("Invalid input");
}

else {
    for (let i = 1; i <= number; i++)
    {
        for (let j = 1; j <=i; j++)
        {
            process.stdout.write(`${j} `)
        }
        process.stdout.write("\n");
    }
}