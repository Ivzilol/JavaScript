function solve(firstNumber, secondNumber) {
    let forPrint = '';
    let sum = 0;
    for (let i = firstNumber; i <= secondNumber; i++) {
        forPrint += i + ' ';
        sum += i;
    }

    console.log(forPrint);
    console.log(`Sum: ${sum}`)
}

solve(5, 10);
solve(0, 26);
