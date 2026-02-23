let arr = [1,3,4,2,55,3,2,5,3,1,2,3,5,666,4,333]

let max = arr[0]

for (let i = 1; i < arr.length; i++)
{

    if (arr[i] > max)
    {
       
        max = arr[i]

        
    }
}
console.log(`The maximum value in the array is ${max}`) 