let amount = Number(prompt("Enter your Amount : "))
let discount;
let total_amount;

if (isNaN(amount) || amount < 0)
{
    console.log("Wrong input ")
}
else
{
    if (amount > -1 && amount <5001)
    {
        discount = 0
    }
    else if (amount > 5000 && amount < 7001)
    {
        discount = amount * 0.05
    }
    else if (amount > 7000 && amount < 9001)
    {
        discount = amount * 0.1
    }
    else if (amount > 9000)
    {
        discount = amount * 0.2
    }
    total_amount = amount - discount;
    console.log(`Amount : ${amount}`)
    console.log(`Discount : ${discount}`)
    console.log(`After discount amount is ${total_amount}`)
}
