// Given an array, find the average of each subarray of ‘K’ contiguous elements in it.

// Array: [1, 3, 2, 6, -1, 4, 1, 8, 2], K=5


const avg = (arr, k) => {
    let length = arr.length;
    let start = 0;
    let avgArr = [];
    let sum = 0;
    for(let i = 0; i < length; i++){
        sum += arr[i];
        if(i >= k-1){
            avgArr.push(sum/k);
            sum -= arr[start];
            start += 1
        }
    }
    return avgArr;

}

console.log(avg([1, 3, 2, 6, -1, 4, 1, 8, 2], 5))