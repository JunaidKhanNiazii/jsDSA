let arr = [0,1,1,0,1,0,1,0,0,1]
let j = 0

for (let i = 0; i < arr.length - 1;  i++)
{
    if (arr[i] == 0)
    {
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        j += 1
    }
}
console.log(arr)