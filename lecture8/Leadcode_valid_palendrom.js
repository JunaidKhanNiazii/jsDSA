let s = "0P"

let array = [...s]
let arr = []
if (s.length === 0)
{
    return ture
}
console.log(array)

for (let i = 0; i < array.length; i++) {
    if (/[a-z]/.test(array[i])) {
        arr.push(array[i])
    }
    else if (/[A-Z]/.test(array[i])) {
        arr.push(array[i].toLowerCase())
    }
    else if (/[0-9]/.test(array[i])) {
        arr.push(array[i])
    }
}

// FIX 1: Create a flag variable assuming it IS a palindrome initially
let isValid = true; 

for (let i = 0; i < arr.length / 2; i++) {
    if (arr[i] !== arr[arr.length - 1 - i]) {
        isValid = false; // FIX 2: Set the flag to false when a mismatch is found
        break
    }
}

// FIX 3: Print the final result based on the flag
return isValid; 
