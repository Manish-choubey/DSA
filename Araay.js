 //question 1
 //Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 let nums = [4,6,2,5], target =10
 var twoSum = function(nums, target){
     for(let i=0;i<nums.length; i++){
         for(let j=0; j<nums.length; j++){
             if(nums[i] + nums[j] === target){
                 return [i,j]
             }
         }
     }
 }
  console.log(twoSum([4,6,2,5],10))  
  
  
//   //Reverse the Array
  function ReverseArray (array){
    let newArry = []
    for(let i = array.length; i>0; i--){
        newArry.push(i)
    }
    return newArry
  }

  let ans = ReverseArray([4,5,6,7])
  console.log(ans)

//  // finding the max and min value in array
//  const array = [4,8,9,2,7]
//  let max = -Infinity
//  let min = Infinity
//  for(let numer of array){
//     if(numer>max)
//     max = numer


//     if(numer<min)
//     min= numer
//  }
//  console.log(max)
//  console.log(min)

//  3.Given an array arr[] and an integer K where K is smaller than size of array, the task is to find the Kth smallest element in the given array. It is given that all array elements are distinct.

//  Example 1:
 
//  Input:
//  N = 6
//  arr[] = 7 10 4 3 20 15
//  K = 3
//  Output : 7
//  Explanation :
//  3rd smallest element in the given 
//  array is 7.
//const nums = [4,5,6,8,5,3]
    
    // var findKthLargest = function(nums, k) {
        
    //     return nums.sort(function(a,b) { return b-a })[k-1];
    // };

    // console.log(findKthLargest([4,5,6,8,5,3],2))





//     var findkthsmallest = function(nums,K){
//         return nums.sort(function(a,b) { return a-b})[K-1];
//     }
// console.log(findkthsmallest([3,4,8,5],3))


//Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
// let arr = [0,2,1,2,0]
// arr.sort()
// console.log(arr)

// //Move all negative numbers to beginning and positive to end with constant extra space





// const array = [
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
// ];

// for (let outerIndex = 0; outerIndex < array.length; outerIndex++) {
//     const innerArray = array[outerIndex];
//     console.log(innerArray)
//     // for (let innerIndex = 0; innerIndex < innerArray.length; innerIndex++) {
//     //     const innerArrayElement = innerArray[innerIndex];
//     //     console.log(innerArrayElement);
//     // }
// }

// //console.log(innerArray)




// // myData = {
// //     name:"rahul",
// //     age:"25",
// //     gender:"male",
// //     address:{
// //         pincode:"254636",
// //         city:"delhi"
// //     }
// // }


// // const {pincode,city}=myData
// // console.log((pincode,city))


// //Move all negative numbers to beginning and positive to end with constant extra space
// const array1 =[-12, 11, -13, -5, 6, -7, 5, -3, -6]
//array1.sort()
//console.log(array1)
//-12 -13 -5 -7 -3 -6 11 6 5

// function move(arr){
//    return arr.sort();
// }

//  let ans =move([-12, 11, -13, -5, 6, -7, 5, -3, -6])

//  console.log(ans)


//console.log(myData.address.pincode)
//console.log(myData.address.city)



//Given two arrays a[] and b[] of size n and m respectively. The task is to find union between these two arrays.
// const arr2= [3,4,5,6]
// const arr3= [3,5,7,8]

// let union = [...arr2,...arr3]
// console.log(union)

//Given an array, rotate the array by one position in clock-wise direction.
// const array = [3,4,5,6]
// function rotedaarry (array,K){
    
//     for(let i =0; i< K+1; i++){
//         array.unshift(array.pop())
//     }
//       return array
//     }
//  console.log(rotedaarry([3,4,5,6],4))



// Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.
// function maxsubArray(array){
//    //let  N=4
//     let result = 0;
//    let  negativenumber=[]
//     for(let i=0;i<array.length; i++){
//         if(array[i]<0){
//             negativenumber.push(array[i])
//         }else{
//             result+=array[i]
//         }
//     }
//     return result
// }


// console.log(maxsubArray([-2,1,-3,4,-1,2,1,-5,4]))

// //console.log(maxsubArray([3,8,8,9]),4)



// const naem= {
//     firstName:"hony",
//     age:"18"
// }

// console.log(naem['age'])
// function getMinDiff(arr,n,k)
// {
//     arr.sort((a,b) => (a-b))
//     let ans = arr[n - 1] - arr[0]; // Maximum possible height difference
  
//     let tempmin, tempmax;
//     tempmin = arr[0];
//     tempmax = arr[n - 1];
  
//     for (let i = 1; i < n; i++) {
//         tempmin= Math.min(arr[0] + k,arr[i] - k); // Minimum element when we
//                                                 // add k to whole array
//         tempmax = Math.max(arr[i - 1] + k, arr[n - 1] - k); // Maximum element when we
//                                                          // subtract k from whole array
//         ans = Math.min(ans, tempmax - tempmin); 
//     }
//     return ans;
// }


// console.log(getMinDiff([4,5,6,7],3,4))




//Given an array of N integers arr[] where each element represents the max length of the jump that can be made forward from that element. Find the minimum number of jumps to reach the end of the array (starting from the first element). If an element is 0, then you cannot move through that element.

// function jumparray(arr){
//     let jump =0;
//     if(arr.length<=1)
//     return 0
//     if(arr[0]===0)
//     return -1
//     for(let i=0;i<arr.length;i++){
//         i += arr[i]
//         jump++
//     }
//     return jump
// }

// console.log(jumparray([4,5,3,5,8]))


//Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] //inclusive.

//There is only one repeated number in nums, return this repeated number.


// function dublicatArray (arr){
//     for(let i=0;i<arr.length;i++){
//       if(arr[i]==arr[i+1]){
//         return arr[i]
//       }
//     }
    
// }

// console.log(dublicatArray([2,2,3,4,5]))

//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
var removeElement = function(nums, val) {
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]==val){
            nums.splice(i,1)
            i--
        }
};
}
//Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

//Return the sum of the three integers.
//Input: nums = [-1,2,1,-4], target = 1

function targetsum (nums,target){
       nums.sort((a,b)=>(a-b))
       let ans = nums[0]+nums[1]+nums[2]
       for(let i =0;i<nums.length-2; i+=1){
        let  start = i+1 , end = nums.length-1
        while(start<end){
            const sum = nums[i]+nums[start]+nums[end]
            if(sum>target){
                end -= 1
            }else{
                start += 1
            }
            if (Math.abs(target-sum)<Math.abs(target-ans)){
                ans = sum
            }
        }
       }
       return ans
}





//Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

//Input: nums = [1,0,-1,0,-2,2], target = 0
//Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]




const ans2= targetsum(([-1,2,1,-4]),1)
console.log(ans2)




//Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The relative order of the elements may be changed.
// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
var removeElement = function(nums, val) {
    
    for(let i=0; i<nums.length; i++){
        if(nums[i]==val){
            nums.splice(i,1)
            i--
        }
};
}
//Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

//Return the sum of the three integers.
//Input: nums = [-1,2,1,-4], target = 1

function targetsum (nums,target){
       nums.sort((a,b)=>(a-b))
       let ans = nums[0]+nums[1]+nums[2]
       for(let i =0;i<nums.length-2; i+=1){
        let  start = i+1 , end = nums.length-1
        while(start<end){
            const sum = nums[i]+nums[start]+nums[end]
            if(sum>target){
                end -= 1
            }else{
                start += 1
            }
            if (Math.abs(target-sum)<Math.abs(target-ans)){
                ans = sum
            }
        }
       }
       return ans
}





//Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

//Input: nums = [1,0,-1,0,-2,2], target = 0
//Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]




const ans5= targetsum(([-1,2,1,-4]),1)
console.log(ans5)