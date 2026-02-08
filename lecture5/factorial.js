let n = Number(prompt("Enter a number ") )

if (isNaN(n) || n < 0)
{
    console.log("Invalid input")
}
else 
{
    let factorial = 1
    for (let i = 1; i <= n; i++)
    {
        factorial *= i
    }
    console.log(`Factorial of ${n} is ${factorial}`);   
}
