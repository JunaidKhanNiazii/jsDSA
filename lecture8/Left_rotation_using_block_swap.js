console.log("Left rotation by Block swap method")

let array = [1,2,3,4,5,6,7]
len = array.length
let k = Number(prompt("Enter the value of K"))

k = k % len

console.log(`Before array is ${array}`)
function reverse_array (i, j)
{
    while(i < j)
    {
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp

        i++
        j--
    }
}
// reverse_array(0, (array.length - 1))
// console.log(`After reverse array is ${array}`)

// Now apply the Left shift logic 

reverse_array (0, k-1)
reverse_array (k, len-1)
reverse_array (0, len -1)

console.log(`After Left shit array is ${array}`)

