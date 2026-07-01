

// let str = "junaid"

let str = prompt("Enter your string ")
console.log("Original String ", str)
let s = ""

for (let i = str.length; i >= 0; i--)
{
    s = s + str.charAt(i)
}
console.log("Reverse String ", s)
