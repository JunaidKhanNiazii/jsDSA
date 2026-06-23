let height = [0,1,0,2,1,0,1,3,2,1,2,1]

let left= height[0]
let right = height[height.length-1]
let left_max = []
let right_max = []

let answer = 0
let j = height.length-1

for(let i =0; i< height.length; i++)
{
    if(height[i] <= left)
    {
        left_max.push(left)
    }
    else
    {
        left_max.push(height[i])
        left = height[i]
    }

    if (height[j] <= right)
    {
        right_max[j] = right
    }
    else 
    {

        right_max[j] = height[j]
        right = height[j]
    }
    j--

}
    console.log(left_max)
    console.log(right_max)

for(let i =0; i < height.length; i++)
{
    answer += Math.min(left_max[i], right_max[i]) - height[i]
}
console.log(answer)