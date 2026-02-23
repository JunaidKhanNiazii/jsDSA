let prompt = require('prompt-sync')()

let number = Number(prompt("Enter a number "))

if (isNaN(number))
{
    console.log("Invalid input");
}

else {
    // let char = "A"
    // let charCode = char.charCodeAt(0)
    // let character = String.fromCharCode(charCode)
    for (let i = 1; i <= number; i++)
    {
        for (let j = 1; j <=i; j++)
        {
            let character = String.fromCharCode(64 + j)
            process.stdout.write(`${character} `)
        }
        process.stdout.write("\n");
    }
}

