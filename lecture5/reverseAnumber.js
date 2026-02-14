let number = Number(prompt("Enter a number "))

if (isNaN(number))
{
    console.log("Invalid input");
}

else {
    let reverse = 0;
    while(number > 0)
    {
        reverse = reverse * 10 + number % 10;
        number = Math.floor(number / 10);
    }
    console.log("Reversed number is: ", reverse);
}