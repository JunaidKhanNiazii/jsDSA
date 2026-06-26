let s = "codeleet"
let indices = [4,5,6,7,0,2,1,3]

let arr = []

for(let i =0; i < indices.length; i++)
{
    arr[indices[i]] = s[i]
}
let str = arr.join('')
console.log(str)