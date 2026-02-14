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

    
}