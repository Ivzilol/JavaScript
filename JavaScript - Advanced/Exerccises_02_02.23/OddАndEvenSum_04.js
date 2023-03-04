function solve(number) {
    let arr = number.toString().split('');
    let sumOdd = 0;
    let sumEven = 0;
    for (let i = 0; i < arr.length; i++) {
        let currentDigit = arr[i];
        if (currentDigit % 2 === 0) {
            sumEven += Number(currentDigit);
        } else {
            sumOdd += Number(currentDigit);
        }
    }
    console.log(`Odd sum = ${sumOdd}, Even sum = ${sumEven}`)
}

solve(1000435)
solve(3495892137259234)