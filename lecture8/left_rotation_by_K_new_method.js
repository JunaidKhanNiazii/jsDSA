console.log("Left rotation by k using Algorithm")

let k = Number(prompt("Enter the value of k for Left rotation"))

let array = [1,2,3,4,5]
let len = array.length
// let temp_array = new Array[array.length]
let temp_array = []
for (let i = 0; i < array.length ; i++)
{
    temp_array[i] = array[(i + k) % len]
}
console.log("Before Array is ", array)
console.log("After Array is", temp_array)