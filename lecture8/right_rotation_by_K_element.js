console.log("---- Right rotation by k element")

let array = [1,2,3,4,5]
let k = Number(prompt("Enter number K for left rotation"))

k = k % arr.length





for(let i = 0; i < k; i++)
{
    copy = array[array.length - 1]


    for(let j = array.length - 1; j > 0; j--)
    {
        array[j] = array [j-1]
    }


    array[0] = copy
}

console.log(array)