// /**
//  * @param {string[]} names
//  * @param {number[]} heights
//  * @return {string[]}
//  */
// var sortPeople = function(names, heights) {
// let array = [...heights]
// let names_return = []
// array.sort((a,b) => b - a)
//     for (let i = 0 ; i < heights.length; i++)
//     {
//         let index = heights.indexOf(Number(array[[i]]))
//         let name1 = names[index]
//         names_return.push(name1)
//     }
//     return names_return

// };


// My approch 
heights = [180,165,170]
names = ["Mary","John","Emma"]

// let array = height   this will point to the same memory 
let array = [...heights]
let names_return = []
console.log(heights)
array.sort((a,b) => b - a)
console.log(heights)
    for (let i = 0 ; i < heights.length; i++)
    {
        let index = heights.indexOf(Number(array[[i]]))
        console.log(index)
        let name1 = names[index]
        names_return.push(name1)
    }

    console.log(array)
    console.log(names_return)
