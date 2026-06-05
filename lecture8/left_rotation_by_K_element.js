console.log("---- Left rotation by k element")

let array = [1,2,3,4,5]

let k = Number(prompt("Enter number K for left rotation"))

k = k % array.length




for(let i = 0; i < k; i++)
{
    copy = array [0]
    for(let j = 0; j < array.length - 1; j++)
    {
        array[j] = array [j+1]
    }
    array[array.length - 1] = copy
}

console.log(array)