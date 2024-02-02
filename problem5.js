// Given a string, find the length of the longest substring, which has all distinct characters.

// Input: String="aabccbb"
// Output: 3
// Explanation: The longest substring with distinct characters is "abc".


const longestSubstring = (str) => {
    let start = 0;
    let maxlength = 0;
    let charIndexMap = {};
    for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
        const rightChar = str[windowEnd];
        if(rightChar in charIndexMap) {
            start = Math.max(start, charIndexMap[rightChar] + 1 )
        }
        charIndexMap[rightChar] = windowEnd;
        maxlength = Math.max(maxlength, windowEnd - start + 1)
    }
    return maxlength;
}

console.log(longestSubstring('aabccbb'))