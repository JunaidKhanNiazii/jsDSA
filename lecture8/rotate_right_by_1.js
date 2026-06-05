let array = [1, 2, 3, 4, 5];

let copy = array[array.length-1]

for (let i = array.length -1; i >= 1; i --)
{
    array[i] = array[i-1]
}
array[0] = copy
console.log(array)