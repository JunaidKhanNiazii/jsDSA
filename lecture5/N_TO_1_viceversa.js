let n = Number(prompt("Enter a number ") )
if (isNaN(n) || n < 0)
{
    console.log("Invalid input")
}
else
{
    for (let i = n; i >= 1; i--)
    {
        console.log(i);
    }
    for (let i = 1; i <= n; i++)
    {
        console.log(i);
    }

}
