let arr = [1,3,4,2,55,3,2,5,3,1,2,3,5,666,4,333]
console.log(`original array is ${arr}`)
let j = arr.length - 1

for (let i = 0; i < arr.length/2; i++)
{

    arr[i] = arr[i] + arr[j]
    arr[j] = arr[i] - arr[j]
    arr[i] = arr[i] - arr[j]
    console.log(i,j)
   
    j--

}

console.log(`reversed array is ${arr}`)