
function solve (arrOne, arrTwo) {
    let obj = {};

    for (let i = 0; i < arrOne.length; i += 2) {
        if (i % 2 === 0) {
            obj[arrOne[i]] = Number(arrOne[i + 1])
        }
    }

    for (let i = 0; i < arrTwo.length; i += 2) {
        let product = arrTwo[i];
        let quantity = Number(arrTwo[i + 1]);

        if (product in obj) {
            obj[product] += quantity;
        } else {
            obj[product] = quantity;
        }
    }

    for (stoke of Object.entries(obj)) {
        console.log(`${stoke[0]} -> ${stoke[1]}`)
    }
}

solve([
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
    ],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)

solve([
        'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
    ],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
)