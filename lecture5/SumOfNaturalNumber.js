let n = Number(prompt("Enter a number ") )


if (isNaN(n) || n < 0)
{
    console.log("Invalid input")
}
else
{
    let sum = 0
    for (let i = 1; i <= n; ++i)
    {
        sum += i
    }
    console.log(`Sum of first ${n} natural numbers is ${sum}`);
}
