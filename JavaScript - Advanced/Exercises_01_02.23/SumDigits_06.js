function solve(number) {
    let digits = number.toString().split('');
    let sum = 0;
    for (let i = 0; i < digits.length; i++) {
        let currentNumber = parseInt(digits[i]);
        sum += currentNumber;
    }
    console.log(sum)
}


solve(245678);
solve(97561);
solve(543);