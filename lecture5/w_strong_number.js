function factorial(num){
    if (num === 0 || num === 1) {
        return 1;
    }
    let f = 1
    let i = 2;
    while (i <= num)
        {
            f *= i;
            i++;
        }
    return f;
    
}
let number = Number(prompt("Enter a number "))
if (isNaN(number))
{
    console.log("Invalid input");
}

else {
    length = number.toString().length;
    console.log(`length = ${length}`);
    let sum = 0;
    while (length > 0)
    {
        digit = Number(number.toString()[length - 1]);
        console.log(`digit = ${digit}`);
        sum += factorial(digit);
        console.log(`sum = ${sum}`);
        length--;
    }
    if (sum === number)
    {
        console.log(number + " is a strong number");
    }
    else
    {
        console.log(number + " is not a strong number");
    }
    
}