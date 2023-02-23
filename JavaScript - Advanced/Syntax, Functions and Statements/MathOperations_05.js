function solve(firstNumber, secondNumber, operator) {
    let result = null;
    switch (operator){
        case '+':
            result = firstNumber + secondNumber;
            break;
        case '-':
            result = firstNumber - secondNumber;
            break;
        case '*':
            result = firstNumber * secondNumber;
            break;
        case '/':
            result = firstNumber / secondNumber;
            break;
        case '%':
            result = firstNumber % secondNumber;
            break;
        case '**':
            result = firstNumber ** secondNumber;
            break;
    }
    console.log(result);
}

solve(5, 6, '+');
solve(3, 5.5, '*');