// This is working correctly but the time out due to 2 loop 

// // prices = [7,1,5,3,6,4]
// // prices = [2,4,1]
// prices = [2, 10, 1, 5]
// let max_profit = 0
// for (let i=0; i < prices.length; i++)
// {
//     for( let j = i + 1; j< prices.length; j++)
//     {
//         let profit = prices[j] - prices[i]
//         if (prices[i] < prices[j] &  max_profit< profit )
//         {
//             max_profit = profit

//         }
//     }
// }

// console.log(max_profit)


// optimize way with one loop 
prices = [7,1,5,3,6,4]
// prices = [2,4,1]
// prices = [2, 10, 1, 5]
let max_profit = 0
let min_value = prices[0]

for (let i = 0; i < prices.length; i++)
{
    if(prices[i] < min_value)
    {
        min_value = prices[i]
    }
    let profit = prices[i] - min_value

    if (profit > max_profit)
    {
        max_profit = profit 
    }

}
console.log(max_profit)