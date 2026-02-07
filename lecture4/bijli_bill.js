let unit = Number(prompt("Enter your unit : "))
let total_amount;

if (isNaN(unit) || unit < 0)
{
    console.log("Wrong input ")
}
else
{
    if (unit > -1 && unit <101)
    {
        total_amount = unit * 4.2
    }
    else if (unit > 100 && unit < 201)
    {
        unit = unit - 100
        total_amount = (100 * 4.2) + (unit * 6)
    }
    else if (unit > 200 && unit < 401)
    {
        unit = unit - 100
        total_amount = (100 * 4.2)
        unit = unit - 100
        total_amount += (100 * 6) + (unit * 8)
    }
    else if (unit > 400)
    {
        unit = unit - 100
        total_amount = (100 * 4.2)
        unit = unit - 100
        total_amount += (100 * 6)
        unit = unit - 200
        total_amount += (200 * 8) + (unit * 13) 


    }
    console.log(`unit : ${unit}`)
    console.log(` Total Bill to pay is  ${total_amount}`)
}
