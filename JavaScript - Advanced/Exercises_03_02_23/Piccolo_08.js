function solve(input) {
    let numberCars = new Map;
    for (const number of input) {
        let currentNumber = number.toString().split(', ');
        switch (currentNumber[0]) {
            case 'IN':
                if (!numberCars.has(currentNumber[1])) {
                    numberCars.set(currentNumber[1], 1);
                }
                break;
            case 'OUT':
                if (numberCars.has(currentNumber[1])) {
                    numberCars.delete(currentNumber[1]);
                }
                break;
        }
    }
    if (numberCars.size === 0) {
        console.log('Parking Lot is Empty')
    } else {
        numberCars = new Map([...numberCars.entries()].sort());
        for (let [key, value] of numberCars) {
            console.log(key);
        }
    }
}

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
)

solve(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
)



