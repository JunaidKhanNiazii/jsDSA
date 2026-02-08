let n = Number(prompt("Enter a number ") )


if (isNaN(n) || n < 0)
{
    console.log("Invalid input")
}
else
{
    if (n == 1)
    {
        console.log("Not a prime number");
    }
    else
    {
        for (var i = 2; i <= Math.floor(n/2); i++)
    {
        if (n % i == 0)
        {
            console.log("Not a prime number");    
            break;
        }
    }
    if (i > Math.floor(n/2))
    {
        console.log("Prime number:", n);
    }
    }
    
    
}
