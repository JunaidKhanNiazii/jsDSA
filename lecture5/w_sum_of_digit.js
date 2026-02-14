let sum = 0
let n = Number(prompt("Enter a number ") )
if (isNaN(n) || n < 0)
{
    console.log("Invalid input")
}
else
{
    while (n > 0)
    {
        sum += n % 10
        n = Math.floor(n / 10)
    }
    console.log("Sum of digits is: ", sum)
}