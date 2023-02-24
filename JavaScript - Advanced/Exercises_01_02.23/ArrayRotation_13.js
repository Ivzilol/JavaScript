function solve(arr, number) {
    for (let i = 0; i < number; i++) {
        let currentNumber = arr[0];
        arr.shift();
        arr.push(currentNumber);
    }
    let str = arr.join(' ')
    console.log(str);
}

solve([51, 47, 32, 61, 21], 2)
solve([32, 21, 61, 1], 4)