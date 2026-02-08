let n = Number(prompt("Enter a number ") )


if (isNaN(n) || n < 0)
{
    console.log("Invalid input")
}
else
{
    for (let i = 1; i <= Math.floor(n/2); i++)
    {
        if (n % i == 0)
        {
            console.log("Factor:", i);    
        }
    }
    console.log("Factor:", n);
}
