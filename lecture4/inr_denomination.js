let amount = Number(prompt("Enter your amount : "))

let fiveThousand = 0
let oneThousand = 0
let fiveHundred = 0
let oneHundred = 0
let seventyFive = 0
let fifty = 0
let twenty = 0
let ten  = 0
let five  = 0
let two  = 0
let one = 0


if (isNaN(amount) || amount < 0)
{
    console.log("Wrong input ")
}
else
{
    console.log(`Total count of note in pkr for this amount : ${amount}`)
    if (amount >= 5000)
    {
        fiveThousand = Math.floor( amount / 5000)
        amount = amount % 5000
        console.log(`Five thousand  : ${fiveThousand}`)
    }
    if (amount >= 1000)
    {
        oneThousand = Math.floor( amount / 1000)
        amount = amount % 1000
        console.log(`One thousand   : ${oneThousand}`)
    }
    if (amount >= 500)
    {
        fiveHundred = Math.floor( amount / 500)
        amount = amount % 500
        console.log(`Five hundred   : ${fiveHundred}`)
    }
    if (amount >= 100)
    {
        oneHundred = Math.floor( amount / 100)
        amount = amount % 100
        console.log(`One hundred    : ${oneHundred}`)
    }
    if (amount >= 75)
    {
        seventyFive = Math.floor( amount / 75)
        amount = amount % 75
        console.log(`Seventy Five   : ${seventyFive}`)
    }
    if (amount >= 50)
    {
        fifty = Math.floor( amount / 50)
        amount = amount % 50
        console.log(`Fifty          : ${fifty}`)
    }
    if (amount >= 20)
    {
        twenty = Math.floor( amount / 20)
        amount = amount % 20
        console.log(`Twenty         : ${twenty}`)
    }

    if (amount >= 10)
    {
        ten = Math.floor( amount / 10)
        amount = amount % 10
        console.log(`Ten            : ${ten}`)
    }
    if (amount >= 5)
    {
        five = Math.floor( amount / 5)
        amount = amount % 5
        console.log(`Five           : ${five}`)
    }
    if (amount >= 2)
    {
        two = Math.floor( amount / 2)
        amount = amount % 2
        console.log(`Two            : ${two}`)
    }
    if (amount >= 1)
    {
        one = Math.floor( amount / 1)
        amount = amount % 1
        console.log(`One            : ${one}`)
    }
    
    
    
    
    
    
    
    
    
    
    
    
}
