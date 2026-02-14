let number = Math.floor(Math.random() * 100) + 1;
// console.log(number);
let guess = Number(prompt("Guess the number between 1 and 100"));
let count = 0;
do 
{
    count++;
    if (guess === number)
    {
        console.log(`Congratulations! You guessed the number in ${count} attempts.`);
        break;
    }
    else if (guess < number)
    {
        console.log("Too low! Try again.");
    }
    else
    {
        console.log("Too high! Try again.");
    }
    guess = Number(prompt("Guess the number between 1 and 100"));   
}
while (true);