// let str = prompt("Enter your string ")
// console.log("Original String ", str)
// let s = ""

// for (let i = str.length; i >= 0; i--)
// {
//     s = s + str.charAt(i)
// }
// console.log("Reverse String ", s)

// if (str === s) console.log("palendrome")
//     else console.log("not a palendrome")


// Approch 2

let str = prompt("Enter your string ")
console.log("Original String ", str)
let j = 0
let palendrome = true
for (let i = str.length - 1; i >= j; i--)
{
   if (str[j] === str[i]) 
    {
        palendrome = true
    }
   else {
    palendrome = false
    break
   }
   j++
}
console.log(palendrome)

