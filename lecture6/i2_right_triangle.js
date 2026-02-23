let prompt = require('prompt-sync')()

let number = Number(prompt("Enter a number "))

if (isNaN(number))
{
    console.log("Invalid input");
}

else {
    for (let i = 1; i <= number; i++)
    {
        for (let k = 1; k <= number - i; k++)
        {
            process.stdout.write("  ")
        }

        for (let j = 1; j <=i; j++)
        {
            process.stdout.write("* ")
        }
        process.stdout.write("\n");
    }
}