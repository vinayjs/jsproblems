// Given an array of positive numbers and a positive number ‘k,’
// find the maximum sum of any contiguous subarray of size ‘k’.

// Input: [2, 1, 5, 1, 3, 2], k=3 
// Output: 9
// Explanation: Subarray with maximum sum is [5, 1, 3].


const maxSub = (arr, k) => {
    let result = 0;
    let start = 0;
    let sum = 0;
    for (let  i = 0; i < arr.length; i++) {
        sum += arr[i];
        if(i >= k-1) {
            result = Math.max(sum, result)
            sum -= arr[start];
            start += 1
        }     

    }
    return result;
}


console.log(maxSub([2, 1, 5, 1, 3, 2], 3))