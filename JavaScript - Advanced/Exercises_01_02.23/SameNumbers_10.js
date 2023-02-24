function solve(number) {
    let digits = number.toString().split('');
    let sum = 0;
    let isTrue = true;
    for (let i = 0; i < digits.length - 1; i++) {
        if (digits[i] !== digits[i + 1]) {
            isTrue = false;
            break;
        }
    }
    for (let i = 0; i < digits.length; i++) {
        let currentNumber = parseInt(digits[i]);
        sum += currentNumber;
    }
    if (isTrue) {
        console.log('true');
    } else {
        console.log('false');
    }
    console.log(sum);
}

solve(2222222)
solve(1234)
