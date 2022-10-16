//Given a string S, check if it is palindrome or not.
// function checkstr(str){
//     let len = str.length
//     let mid = Math.floor(len/2)
//     for(let i=0; i<mid;i++){
//         if(str[i] !== str[len-1-i]){
//             return false
//         }
//     }
//     return true
// }

// console.log(checkstr('abba'))

//Print all the duplicates in the input string

// function dulicatestr(str){
    
//     for(let i=0; i<str.length; i++){
//         for(let j= i+1; j<str.length; j++){
//             if(str[j]!==str[i]){
//                 return false
//             }
//         }
//     }
//     return true

// }

//console.log(dulicatestr('manaaan'))


//The reason is that strings are immutable – they cannot change, we can only ever make new strings. Strings are not the only immutable values built into JavaScript. Numbers are immutable too.
// let a = 'Hello'
// a['o'] = 'h'
// console.log(a)


//Check if given strings are rotations of each other or not

//function roted (str1,str2){
  //  let str = str1+str2
    //return str.includes(str2)
//}

//console.log(roted('abcd','cdab'))


// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000


// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Given a roman numeral, convert it to an integer.



// var romanToInt = function(s) {
//     let sum =0
//     let roman = {
//         I:1,
//         V:5,
//         X:10,
//         L:50,
//         C:100,
//         D:500,
//         M:1000
//     }
//     for(let i=0;i<s.length;i++){
//         if(roman[s[i]]<roman[s[i+1]]){
//             sum -= roman[s[i]]
//         }else{
//             sum += roman[s[i]]
//         }
//     }
//     return sum
    
// };


// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
//Input: strs = ["flower","flow","flight"]
//Output: "fl"
var longestCommonPrefix = function(strs) {
    
    let prefix = ""
    strs.sort()
    for(let i=0;i<strs[0].length; i++){
        if(strs[0][i]===strs[strs.length-1][i]){
            prefix = strs[0].substring(0,i+1)
        }else{
            break
        }
    }
    return prefix
    
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
