let array1 = [2, 3, 5, 7];
let array2 = [1, 3, 6, 8, 8, 8];

let merge = [];
let i = 0;
let j = 0;

while (i < array1.length && j < array2.length) {
    if (array1[i] <= array2[j]) {
        merge.push(array1[i++]);
    } else {
        merge.push(array2[j++]);
    }
}

while (i < array1.length) {
    merge.push(array1[i++]);
}

while (j < array2.length) {
    merge.push(array2[j++]);
}

console.log(merge);