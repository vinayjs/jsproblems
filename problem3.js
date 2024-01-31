// check whether a given number is palindrome or not ?

// input 123  output=> not a plaindrome
// imput 323 output => it is palindrome

const palindrome = (num) => {
    let result = 0;
    let temp = num;
    while(temp > 0) {
        let digit = temp % 10;
        result = result * 10 + digit;
        temp = parseInt(temp/10)
    }
    return result === num ? 'num is palindrome' : 'num is not palindrome'
}

console.log(palindrome(123))
console.log(palindrome(121))