function primeNumber(n)
{
    if (n == 1) return false
    if (n == 2) return true
    if (n % 2 == 0) return false
    for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2)
    {
        if (n % i == 0) return false
    }
    return true
}
let n = Number(prompt("Enter a number ") )

if (isNaN(n) || n < 0)
{
    console.log("Invalid input")
}
else
{
    if (primeNumber(n))
    {
        console.log("Prime number:", n);
    }
    else
    {
        console.log("Composite number:", n);
    }
}