let arr = [1,3,4,2,55,3,2,5,3,1,2,3,5,666,4,333]

let max = arr[0]
let sec_max = arr[0]
for (let i = 1; i < arr.length; i++)
{

    if (arr[i] > sec_max)
    {
        sec_max = arr[i]
    }
    if (sec_max > max)
    {
        let temp = max
        max = sec_max
        sec_max = temp
    }
       

}
console.log(`The maximum value in the array is ${max}`)
console.log(`The second maximum value in the array is ${sec_max}`)
console.log(Math.max(...arr))