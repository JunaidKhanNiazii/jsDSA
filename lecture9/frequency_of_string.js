let str = prompt("Enter a string")
let s = new Array(128).fill(0)
// console.log(s)

for (let i = 0;  i < str.length; i++)
{
    let index = str.charCodeAt(i)
    s[index] = s[index] + 1
}
// console.log(s)

for(let i = 0; i < s.length; i++)
{
    if (s[i] > 0)
    {
        console.log("Character is ", String.fromCharCode(i), "comes ", s[i]) 
    }
}