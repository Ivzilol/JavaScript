function isPalindrome(str) {
    let reverseWord = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reverseWord += str[i];
    }

    return reverseWord === str;
}

console.log(isPalindrome('racecar'));
console.log(isPalindrome('hello'));