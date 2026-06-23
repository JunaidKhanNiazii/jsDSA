// // my approch 

// console.log("Sort color");

// let arr = [2,0,2,1,1,0]

// for(let j = 0; j < arr.length; j++)
// {
//     for (let i = 0; i < arr.length - 1; i++)
//     {
//         if (arr [i+1] < arr [i])
//         {
//             [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
//         } 
    
//     }
//     console.log(arr)

// }


/// optimize using one loop 

console.log("Sort color");

let arr = [2,0,2,1,1,0]

let start = 0
let end = arr.length - 1
let i = 0

while(i < end)
{
    if (arr[i] === 2)
    {
        [arr[i], arr[end]] = [arr[end], arr[i]]
        end--
    }
    else if(arr[i] === 0)
    {
        [arr[start], arr[i]] = [arr[i], arr[start]]
        start++
        i++
    } else {
        i++
    }
}
console.log(arr)
console.log("Hello, World!");