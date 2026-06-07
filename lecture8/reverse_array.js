let arr = [1,2,3,4,5]
function reverse (i, j)
{
    console.log(`Array before ${arr}`)
    while (i < j)
    {
        
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }

    console.log(`After Reverse ${arr}`)
}

reverse(0, (arr.length - 1))