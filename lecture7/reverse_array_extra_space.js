let arr = [1,3,4,2,55,3,2,5,3,1,2,3,5,666,4,333]

let reverse_arr =[]

for (let i = arr.length - 1; i >=0; i--)
{
    reverse_arr.push(arr[i])
}
console.log(`original array is ${arr}`)
console.log(`reversed array is ${reverse_arr}`)