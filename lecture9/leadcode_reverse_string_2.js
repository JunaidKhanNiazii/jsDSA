/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverseString(string) {
let reverse = ""
for (let i = string.length - 1; i >= 0; i-- )
{
reverse += string[i]  
}
return reverse

}
var reverseStr = function(s, k) {

let new_string = ""

for (let i = 0; i < s.length; i += k *2)
{
let str_split = s.slice(i, i + k )
// console.log(str_split)
    new_string += reverseString(str_split)
let second = s.slice(i + k, i + 2 * k);
        new_string += second;
}


return new_string 
};