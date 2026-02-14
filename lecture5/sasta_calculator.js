while (true){
    console.log("Welcome to Sasta Calculator");
    let num1 = Number(prompt("Enter first number"));
    let num2 = Number(prompt("Enter second number"));
    let operator = prompt("Enter operator (+, -, *, /)");
    let result;
    if (isNaN(num1) || isNaN(num2))
    {
        console.log("Invalid input");
        continue;
    }
    switch (operator)
    {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            if (num2 === 0)
            {
                console.log("Cannot divide by zero");
                continue;
            }
            result = num1 / num2;
            break;
        default:
            console.log("Invalid operator");
            continue;
    }
    console.log(`Result: ${result}`);
    let again = prompt("Do you want to perform another calculation? (yes/no)");
    if (again.toLowerCase() !== "yes")
    {
        console.log("Thank you for using Sasta Calculator");
        break;
    }       

}