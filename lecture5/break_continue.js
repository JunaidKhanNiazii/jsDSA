
let con = 5
let br = 10
for (let i = 1; i <= 100; i++)
{
    if (i === con)
    {
        continue
    }
    if (i == br)
    {
        break
    }
    console.log(i);
}